import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeUntil, map, filter, take } from 'rxjs/operators';


import { PaintCursor } from '../../draw_modules/paintcursor';
import { ObservablePaintCursor } from '../../draw_modules/observablepaintcursor';
import { MouseposService } from '../../services/mousepos.service';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';
import { SocketsService } from 'src/app/services/sockets.service';
import { DrawSocketModule } from 'src/app/socket_modules/socket-draw';
import { DrawchatService } from '../../services/drawchat.service';

@Component({
  selector: 'app-drawchat-canvas',
  templateUrl: './drawchat-canvas.component.html',
  styleUrls: ['./drawchat-canvas.component.css'],
  providers: [MouseposService]
})
export class DrawchatCanvasComponent implements OnInit, OnDestroy {
  @ViewChild('container') canvasContainerRef;
  @ViewChild('base') baseCanvasRef;
  @ViewChild('self') selfCanvasRef;

  destroy: Subject<boolean> = new Subject<boolean>();

  @Input() currZoom = 1;

  peerList = {};

  drawConnection: DrawSocketModule;
  baseCtx: CanvasRenderingContext2D;
  selfCtx: CanvasRenderingContext2D;
  container: HTMLElement;
  myPaintCursor: ObservablePaintCursor;

  trackMouse;

  constructor(
    private mouse: MouseposService,
    private socket: SocketsService,
    private brush: DrawchatBrushService,
    private drawChatService: DrawchatService
  ) {
    this.drawConnection = this.socket.drawModule;
  }

  ngOnInit() {
    this.container = (this.canvasContainerRef.nativeElement as HTMLElement);
    this.baseCtx = (this.baseCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.selfCtx = (this.selfCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');

    this.myPaintCursor = new ObservablePaintCursor(this.baseCtx).setUpperLayer(this.selfCtx);

    this.trackMouse = this.mouse.getMousePosTracker(this.baseCtx.canvas);

    this.subscribeToCursorEvents();
    this.subscribeToBrushChanges();
    this.subscribeToRoomEvents();
    this.subscribeToCanvasEvents();
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  subscribeToCursorEvents() {
    this.myPaintCursor.onStart.subscribe(
      this.drawConnection.emitCanvasActionStart
        .bind(this.drawConnection));

    this.myPaintCursor.onMove.subscribe(
      this.drawConnection.emitMousePosUpdate
        .bind(this.drawConnection));

    this.myPaintCursor.onEnd.subscribe(
      this.drawConnection.emitCanvasActionEnd
        .bind(this.drawConnection));
  }

  subscribeToBrushChanges() {
    this.brush.colorChanged
      .pipe(takeUntil(this.destroy))
      .subscribe(this.myPaintCursor.setColor
        .bind(this.myPaintCursor));

    this.brush.sizeChanged
      .pipe(takeUntil(this.destroy))
      .subscribe(this.myPaintCursor.setSize
        .bind(this.myPaintCursor));
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
      .onStrokeLogSignal()
      .pipe(take(1))
      .subscribe(this.fetchStrokeLog.bind(this));
  }

  removeFromPeerList({ id }) {
    if (this.peerList[id]) {
      delete this.peerList[id];
    }
  }

  addPeerCursor({ id, username }) {
    const cursor = new PaintCursor(this.baseCtx).setLabel(username)
    this.peerList[id] = { username, cursor }
    // Get upper Canvas for new cursor
    this.checkForCanvas({ id: id, intervalInMs: 200 })
      .subscribe(foundCanvas =>
        cursor.setUpperLayer(foundCanvas.getContext('2d')))
  }

  checkForCanvas({ id, intervalInMs }: { id: string, intervalInMs: number }) {
    return interval(intervalInMs)
      .pipe(
        map(() => this.findCanvasWithId(id)),
        filter(found => found !== undefined),
        map(found => found as HTMLCanvasElement),
        take(1)
      )
  }

  findCanvasWithId(id: string) {
    return Array.from(this.container.children)
      .find(val => val.id == id);
  }


  shareCanvasWithPeer({ id }) {
    console.log("SHARING CANVAS WITH PEER,", id)
    this.socket.roomModule.emitCanvasData({ id, data: this.getCanvasData() });
  }

  getCanvasData() {
    return this.baseCtx.canvas.toDataURL('image/png', 0.7);
  }

  receiveCanvasData({data}) {
    const img = new Image();
    img.onload = () => {
      this.baseCtx.drawImage(img, 0, 0);
    }
    img.src = data;
  }

  fetchStrokeLog({id}) {
    this.drawChatService.fetchLog(id)
      .subscribe(data => {
        console.log("YAYYYY")
        console.log(data)
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
    this.getCursorByUserId(id).setSize(data);
  }

  updatePeersMousePos({ id, data: { x, y } }) {
    this.getCursorByUserId(id).moveTo(x, y);
  }

  startPeerAction({ id, data }) {
    this.getCursorByUserId(id)
      .setColor(data['rgba'])
      .startAction();
  }

  endPeerAction({ id }) {
    const cursor = this.getCursorByUserId(id);
    if (cursor.hasOngoingAction()) {
      cursor.endAction();
    }
  }


  getCursorByUserId(id) {
    return this.peerList[id]['cursor'] as PaintCursor;
  }

  // Personal events

  onMouseEnter() {
    this.myPaintCursor.show();
  }

  onMouseDown(e: MouseEvent) {
    if (e.button === 0) {
      this.myPaintCursor.startAction();
    }
  }

  onMouseMove(e: MouseEvent) {
    const { x, y } = this.trackMouse(e);
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



}

