import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Brush } from '../../draw_modules/brush';
import { Cursor } from '../../draw_modules/cursor';
import { MouseposService } from '../../services/mousepos.service';
@Component({
  selector: 'app-drawchat-canvas',
  templateUrl: './drawchat-canvas.component.html',
  styleUrls: ['./drawchat-canvas.component.css'],
  providers: [MouseposService]
})
export class DrawchatCanvasComponent implements OnInit {
  @ViewChild('container') canvasContainerRef;
  @ViewChild('base') baseCanvasRef;
  @ViewChild('self') selfCanvasRef;

  @Input() brushSettings;

  @Input() currZoom = 1;

  baseCtx: CanvasRenderingContext2D;
  selfCtx: CanvasRenderingContext2D;
  myCursor: Cursor;
  myBrush: Brush;

  constructor(
    private mouse: MouseposService,
    ) {}

  ngOnInit() {
    this.baseCtx = (this.baseCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.selfCtx = (this.selfCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.myBrush = new Brush(this.selfCtx);
    this.myCursor = new Cursor().hide();
  }

  onMouseEnter() {
    this.myCursor.show();
  }

  onMouseDown(e: MouseEvent) {
    if (e.buttons === 1) {
      const {x, y} = this.getMousePosOnCanvas(e);
      this.myBrush
        .setColor(this.brushSettings['rgba'])
        .setSize(this.brushSettings['size'])
        .startAt(x, y)
    }
  }

  onMouseMove(e: MouseEvent) {
    const {x, y} = this.getMousePosOnCanvas(e);
    this.myCursor.moveTo(x, y);
    if (e.buttons === 1) {
      this.myBrush.drawTo(x, y);
    }
  }

  onMouseUp() {
    this.endCurrentStroke();
  }
  
  onMouseLeave() {
    this.endCurrentStroke();
    this.myCursor.hide()
  }

  onScroll(e) {
    console.log(e)
    // const {x, y} = this.getMousePosOnCanvas(e);
    // this.myCursor.moveTo(x, y);
  }

  getMousePosOnCanvas(e: MouseEvent) {
    return this.mouse.getMousePos(e, this.baseCtx.canvas);
  } 

  endCurrentStroke() {
    if (this.myBrush.isDrawing()) {
      this.myBrush
        .setOn(this.baseCtx)
        .reset();
    }
  }
}

