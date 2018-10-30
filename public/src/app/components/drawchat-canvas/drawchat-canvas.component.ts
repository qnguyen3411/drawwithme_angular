import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeWhile, takeUntil, map, filter } from 'rxjs/operators';


import { Cursor } from '../../draw_modules/cursor';
import { PaintCursor } from '../../draw_modules/paintcursor';
import { MouseposService } from '../../services/mousepos.service';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';
import { SocketsService } from 'src/app/services/sockets.service';
import { DrawSocketModule } from 'src/app/socket_modules/socket-draw';

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
  @Input() peerAdded: Subject<any>;
  peerList = {};

  drawConnection: DrawSocketModule;
  baseCtx: CanvasRenderingContext2D;
  selfCtx: CanvasRenderingContext2D;
  container: HTMLElement;
  myPaintCursor: PaintCursor;

  constructor(
    private mouse: MouseposService,
    private _socket: SocketsService,
    private brush: DrawchatBrushService
  ) {
    this.drawConnection = this._socket.drawModule;
  }

  ngOnInit() {
    this.container = (this.canvasContainerRef.nativeElement as HTMLElement);
    this.baseCtx = (this.baseCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.selfCtx = (this.selfCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.myPaintCursor = new PaintCursor(this.baseCtx).setUpperLayer(this.selfCtx);

    this.subscribeToBrushChanges();
    this.subscribeToRoomEvents();
    this.subscribeToCanvasEvents();
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  subscribeToBrushChanges() {
    this.brush.colorChanged
      .pipe(takeUntil(this.destroy))
      .subscribe(this.myPaintCursor.setColor);
    this.brush.sizeChanged
      .pipe(takeUntil(this.destroy))
      .subscribe(this.myPaintCursor.setSize);
  }

  subscribeToRoomEvents() {
    this._socket.roomModule
      .onPeerJoin()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.addPeerCursor.bind(this));

    this._socket.roomModule
      .onReceivingUserList()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.initializePeerList.bind(this));

    this._socket.roomModule.onPeerLeave()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.removeFromPeerList.bind(this));

  }

  removeFromPeerList({ id }) {
    if (this.peerList[id]) {
      delete this.peerList[id];
    }
  }

  initializePeerList(peerList) {
    Object.entries(peerList).forEach(([id, username]) =>
      this.addPeerCursor({ id, username })
    );
  }

  addPeerCursor({ id, username }) {
    const cursor = new PaintCursor(this.baseCtx).setLabel(username)
    this.peerList[id] = { username, cursor }

    // const obs = interval(200)
    //   .pipe(
    //     takeWhile(ctxNotFound),
    //     map(() => this.findCanvasWithId(id)),
    //     filter(found => found !== undefined)
    //   )
    //   .subscribe(found => {
    //     newCtx = (found as HTMLCanvasElement).getContext('2d');
    //     cursor.setUpperLayer(newCtx);
    //     console.log(this.peerList)
    //   })
    let newCtx: CanvasRenderingContext2D;
    const ctxNotFound = () => !newCtx;
    const obs = this.checkForCanvas({ id: id, intervalInMs: 200 })
      .pipe(takeWhile(ctxNotFound))
      .subscribe(foundCanvas => {
        newCtx = (foundCanvas as HTMLCanvasElement).getContext('2d');
        cursor.setUpperLayer(newCtx);
        console.log(this.peerList)
      })
  }

  checkForCanvas({ id, intervalInMs }: { id: string, intervalInMs: number }) {
    return interval(intervalInMs)
      .pipe(
        map(() => this.findCanvasWithId(id)),
        filter(found => found !== undefined)
      )
  }

  findCanvasWithId(id: string) {
    console.log("FINDING CANVAS....")
    return Array.from(this.container.children).find(val => val.id == id);
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
    const cursor = this.peerList[id]['cursor'] as Cursor;
    cursor.setSize(data);
  }

  updatePeersMousePos({ id, data: { x, y } }) {
    const cursor = this.peerList[id]['cursor'] as PaintCursor;
    cursor.moveTo(x, y);
  }

  startPeerAction({ id, data }) {
    const cursor = this.peerList[id]['cursor'] as PaintCursor;
    cursor.setColor(data['rgba'])
      .setSize(cursor.size)
      .startAction();
  }

  endPeerAction({ id, data }) {
    const cursor = this.peerList[id]['cursor'] as PaintCursor;
    if (cursor.hasOngoingAction()) {
      cursor.endAction();
    }
  }

  // Personal events

  onMouseEnter() {
    this.myPaintCursor.show();
  }

  onMouseDown(e: MouseEvent) {
    if (e.button === 0) {
      this.myPaintCursor.startAction();
      // TODO: implement tools
      this.drawConnection.emitCanvasActionStart({ rgba: this.brush.rgba });
    }
  }

  onMouseMove(e: MouseEvent) {
    const { x, y } = this.getMousePosOnCanvas(e);
    this.myPaintCursor.moveTo(x, y);
    this.drawConnection.emitMousePosUpdate({ x, y })
  }

  onMouseUp() {
    this.endCurrentStroke();
  }

  onMouseLeave() {
    this.endCurrentStroke();
    this.myPaintCursor.hide()
  }

  getMousePosOnCanvas(e: MouseEvent) {
    return this.mouse.getMousePos(e, this.baseCtx.canvas);
  }

  endCurrentStroke() {
    if (this.myPaintCursor.hasOngoingAction()) {
      this.myPaintCursor.endAction();
      this.drawConnection.emitCanvasActionEnd();
    }
  }

  getCurrSize() {
    return this.brush.size;
  }

  peerListIsEmpty() {
    return Object.keys(this.peerList).length === 0;
  }
}

