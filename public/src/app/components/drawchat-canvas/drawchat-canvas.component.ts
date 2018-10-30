import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';


import { Brush } from '../../draw_modules/brush';
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
  @Input() peerList = {};
  @Input() peerAdded: Subject<any>;

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

    this.peerAdded.subscribe(this.putPeerOnCanvas.bind(this));
    this.subscribeToCanvasEvents();
    this.subscribeToBrushChanges();
  }

  ngOnDestroy() {
    this._socket.connectionModule.leaveRoom();
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  subscribeToBrushChanges() {
    this.brush.colorChanged.subscribe(color => {
      console.log("COLOR CHANGED!");
      this.myPaintCursor.setColor(color);
      // console.log(color);
    });
    this.brush.sizeChanged.subscribe(size => {
      console.log("SIZE CHANGED!");
      // console.log(size);
      this.myPaintCursor.setSize(size);
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

  putPeerOnCanvas(newPeer) {
    const id = newPeer['id'];
    this.addPeerCursor(id);
    this.addPeerBrush(id);
  }

  addPeerCursor(peerId: string) {
    this.peerList[peerId]['cursor'] = new Cursor();
  }

  addPeerBrush(peerId: string) {
    let newCtx: CanvasRenderingContext2D;

    const obs = interval(200)
      .pipe(takeWhile(() => !newCtx))
      .subscribe(() => {
        const hasPeerId = val => val.id == peerId;
        const found = Array.from(this.container.children).find(hasPeerId);

        if (found !== undefined) {
          newCtx = (found as HTMLCanvasElement).getContext('2d');
          this.peerList[peerId]['brush'] = new Brush(newCtx);
        }
      })
  }

  updatePeersCursorSize({ id, data }) {
    const cursor = this.peerList[id]['cursor'] as Cursor;
    cursor.setSize(data);
  }

  updatePeersMousePos({ id, data: { x, y } }) {
    const cursor = this.peerList[id]['cursor'] as Cursor;
    const brush = this.peerList[id]['brush'] as Brush;
    cursor.moveTo(x, y);
    if (brush.isDrawing()) {
      brush.drawTo(x, y);
    }
  }

  startPeerAction({ id, data }) {
    const cursor = this.peerList[id]['cursor'] as Cursor;
    const brush = this.peerList[id]['brush'] as Brush;

    brush.setColor(data['rgba'])
      .setSize(cursor.size)
      .startAt(cursor.x, cursor.y);
  }

  endPeerAction({ id, data }) {
    const brush = this.peerList[id]['brush'] as Brush;
    if (brush.isDrawing()) {
      brush.setOn(this.baseCtx).reset();
    }
  }

  // Personal events

  onMouseEnter() {
    this.myPaintCursor.show();
  }

  onMouseDown(e: MouseEvent) {
    if (e.button === 0) {
      this.myPaintCursor.startAction();

      // this.drawConnection.emitCanvasActionStart(this.brushSettings);
    }
  }

  onMouseMove(e: MouseEvent) {
    const { x, y } = this.getMousePosOnCanvas(e);
    this.myPaintCursor.moveTo(x, y);
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
      // this.drawConnection.emitCanvasActionEnd();
    }
  }

  getCurrSize() {
    return this.brush.size;
  }

  peerListIsEmpty() {
    return Object.keys(this.peerList).length === 0;
  }
}

