import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeUntil, map, take, filter, tap } from 'rxjs/operators';

import { PaintCursor } from 'src/app/draw_modules/paintcursor';
import { ObservablePaintCursor } from 'src/app/draw_modules/observablepaintcursor';

import { MouseposService } from 'src/app/services/mousepos.service';
import { DrawchatBrushService } from 'src/app/services/drawchat-brush.service';
import { SocketsService } from 'src/app/services/sockets.service';
import { DrawSocketModule } from 'src/app/socket_modules/socket-draw';
import { WindowService } from 'src/app/services/window.service';
import { DrawchatCanvasDataCacheService } from 'src/app/services/drawchat-canvas-data-cache.service';

@Component({
  selector: 'app-drawchat-canvas',
  templateUrl: './drawchat-canvas.component.html',
  styleUrls: ['./drawchat-canvas.component.css'],
  providers: [MouseposService, WindowService]
})
export class DrawchatCanvasComponent implements OnInit, OnDestroy {
  @ViewChild('container') canvasContainerRef;
  @ViewChild('base') baseCanvasRef;
  @ViewChild('self') selfCanvasRef;
  @Input() currRoom;
  @Input() currZoom = 1;

  container: HTMLElement;
  baseCtx: CanvasRenderingContext2D;
  selfCtx: CanvasRenderingContext2D;
  myPaintCursor: ObservablePaintCursor;
  trackMouse;
  
  drawConnection: DrawSocketModule;
  destroy: Subject<boolean> = new Subject<boolean>();

  peerList = {};
  strokeCounter = 0;  
  constructor(
    private mouse: MouseposService,
    private socket: SocketsService,
    private brushSettings: DrawchatBrushService,
    private window: WindowService,
    private cache: DrawchatCanvasDataCacheService
  ) {
    this.drawConnection = this.socket.drawModule;
  }

  ngOnInit() {
    this.container = (this.canvasContainerRef.nativeElement as HTMLElement);
    this.baseCtx = (this.baseCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.selfCtx = (this.selfCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');

    this.myPaintCursor = new ObservablePaintCursor(this.baseCtx).setUpperLayer(this.selfCtx);
    this.trackMouse = this.mouse.getMousePosTracker(this.baseCtx.canvas);
    
    this.subscribeToWindowEvents();
    this.subscribeToSelfCursorEvents();
    this.subscribeToBrushChanges();
    this.subscribeToRoomEvents();
    this.subscribeToCanvasEvents();
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
    this.onLeave();
  }

  subscribeToWindowEvents() {
    this.window.onWindowUnload()
      .subscribe(this.onLeave.bind(this));
  }

  async onLeave() {
    if (Object.keys(this.peerList).length === 0) {
      // Cache data uri
      this.cache.setCache(this.baseCtx.canvas.toDataURL(), this.currRoom);
      // Snapshot signal
      this.socket.roomModule.sendSnapshot({ data: await this.getCanvasData() });
    }
  }

  subscribeToSelfCursorEvents() {

    this.myPaintCursor.onStart.subscribe(
      this.drawConnection.emitCanvasActionStart
        .bind(this.drawConnection));

    this.myPaintCursor.onMove.subscribe(
      this.drawConnection.emitMousePosUpdate
        .bind(this.drawConnection));

    this.myPaintCursor.onEnd.pipe(
      tap(() => {this.strokeCounter++})
    )
    .subscribe(
      this.drawConnection.emitCanvasActionEnd
        .bind(this.drawConnection));
  }

  subscribeToBrushChanges() {
    this.brushSettings.colorChanged
      .pipe(takeUntil(this.destroy))
      .subscribe(this.myPaintCursor.setColor
        .bind(this.myPaintCursor));

    this.brushSettings.sizeChanged
      .pipe(takeUntil(this.destroy))
      .subscribe(this.myPaintCursor.setSize
        .bind(this.myPaintCursor));

    this.brushSettings.toolChanged
      .pipe(takeUntil(this.destroy))
      .subscribe(this.myPaintCursor.setTool
        .bind(this.myPaintCursor))

  }

  subscribeToRoomEvents() {
    this.socket.roomModule
      .onPeerJoin()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.addPeerCursor.bind(this));

    this.socket.roomModule
      .onReceivingPeerInfo()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.addPeerCursor.bind(this));
    
    this.socket.roomModule
      .onPeerLeave()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.removeFromPeerList.bind(this));

    this.socket.roomModule
      .onPeersCanvasRequest()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.shareCanvasWithPeer.bind(this));

    this.socket.roomModule
      .onCanvasDataReceived()
      .pipe(take(1))
      .subscribe(this.receiveCanvasData.bind(this));

    this.socket.roomModule
      .onSnapshotPoll()
      .pipe(takeUntil(this.destroy))
      .subscribe(async () => {
        if (this.strokeCounter === 0) { return; }
        this.socket.roomModule.sendSnapshot({ data: await this.getCanvasData()});
      });

    this.socket.roomModule
      .onSnapshotPollFinish()
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {this.strokeCounter = 0})

    this.socket.roomModule
      .onSnapshotSignal()
      .pipe(take(1))
      .subscribe(this.fetchSnapshot.bind(this));
  }

  removeFromPeerList({ id }) {
    if (this.peerList[id]) {
      delete this.peerList[id];
    }
  }

  addPeerCursor({ id, username }) {
    const cursor = new PaintCursor(this.baseCtx).setLabel(username)
    this.peerList[id] = { username, cursor }
    // New Cursor needs an upper canvas that won't be generated yet
    // Keep checking until that canvas is generated
    this.checkForCanvas({ id: id, intervalInMs: 200 })
      .subscribe(foundCanvas =>
        cursor.setUpperLayer(foundCanvas.getContext('2d')))
  }

  checkForCanvas({ id, intervalInMs }: { id: string, intervalInMs: number }) {
    return interval(intervalInMs)
      .pipe(
        map(() => this.findCanvasWithId(id)),
        filter(found => found !== undefined),
        take(1),
        map(found => found as HTMLCanvasElement),
      )
  }

  findCanvasWithId(id: string) {
    return Array.from(this.container.children)
      .find(val => val.id == id);
  }

  async shareCanvasWithPeer({ id }) {
    this.socket.roomModule.emitCanvasData({ id, data: await this.getCanvasData() });
  }

  receiveCanvasData({ data }) {
    const img = new Image();
    const url = URL.createObjectURL(new Blob([data], {type : 'image/png'}));

    img.onload = () => {
      this.baseCtx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
    }
    img.src = url;
  }

  fetchSnapshot({url}) {
    const cachedData = this.cache.getCachedData(this.currRoom);
    const img = new Image();
    img.onload = () => {
      this.baseCtx.drawImage(img, 0, 0);
    }
    img.crossOrigin = 'anonymous';
    img.src = cachedData || url;
  }

  async sendSnapshot() {
    this.socket.roomModule.sendSnapshot({ data: await this.getCanvasData()})
  }

  getCanvasData() {
    return new Promise((resolve, reject) => {
      this.baseCtx.canvas.toBlob(blob => { resolve(blob);})
    })
     
  }

  subscribeToCanvasEvents() {
    this.drawConnection
      .onPeersCursorSizeUpdate()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.updatePeersCursorSize.bind(this));

    this.drawConnection
      .onPeersMousePosUpdate()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.updatePeersMousePos.bind(this));

    this.drawConnection
      .onPeersCanvasActionStart()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.startPeerAction.bind(this));

    this.drawConnection
      .onPeersCanvasActionEnd()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.endPeerAction.bind(this));

  }

  updatePeersCursorSize({ id, data }) {
    if(this.peerList[id] === undefined) { return; }
    this.getCursorByUserId(id).setSize(data);
  }

  updatePeersMousePos({ id, data: { x, y } }) {
    if(this.peerList[id] === undefined) { return; }
    this.getCursorByUserId(id).moveTo(x, y);
  }

  startPeerAction({ id, data }) {
    if(this.peerList[id] === undefined) { return; }
    this.getCursorByUserId(id)
      .setColor(data['rgba'])
      .startAction();
  }

  endPeerAction({ id }) {
    if(this.peerList[id] === undefined) { return; }
    this.strokeCounter++;
    this.getCursorByUserId(id).endAction();
  }


  getCursorByUserId(id) {
    return this.peerList[id]['cursor'] as PaintCursor;
  }

  // Personal events

  onMouseEnter() {
    this.myPaintCursor.show();
  }

  onMouseDown(e: MouseEvent) {
    if (this.leftMouseIsDown(e)) {
      if (this.brushSettings.tool === 'EYEDROPPER') {
        const { x, y } = this.trackMouse(e);
        const {data} = this.baseCtx.getImageData(x, y, 1, 1);
        this.brushSettings.changeColor([data[0], data[1], data[2]]);  
      } else {
        this.myPaintCursor.startAction();
      }
    }
  }

  onMouseMove(e: MouseEvent) {
    const { x, y } = this.trackMouse(e);
    if (this.brushSettings.tool === 'EYEDROPPER' && this.leftMouseIsDown(e)) {
      const {data} = this.baseCtx.getImageData(x, y, 1, 1);
      this.brushSettings.changeColor([data[0], data[1], data[2]]);
    }
    this.myPaintCursor.moveTo(x, y);
  }

  onMouseUp() {
    this.endCurrentStroke();
  }

  onMouseLeave() {
    this.endCurrentStroke();
    this.myPaintCursor.hide();
  }

  endCurrentStroke() {
    if (this.myPaintCursor.hasOngoingAction()) {
      this.myPaintCursor.endAction();
    }
  }

  leftMouseIsDown(e: MouseEvent) {
    return e.button === 0 && e.buttons === 1;
  }

}

