import { Component, OnInit, Compiler, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Brush } from '../../draw_modules/brush';
import { MouseposService } from '../../services/mousepos.service';
@Component({
  selector: 'app-drawchat-canvas',
  templateUrl: './drawchat-canvas.component.html',
  styleUrls: ['./drawchat-canvas.component.css'],
  providers: [MouseposService]
})
export class DrawchatCanvasComponent implements OnInit {
  @ViewChild('container') canvasContainer;
  @ViewChild('base') baseCanvas;
  @ViewChild('self') selfCanvas;

  baseCtx: CanvasRenderingContext2D;
  selfCtx: CanvasRenderingContext2D;
  myBrush: Brush;


  constructor(
    private compiler: Compiler,
    private mouse: MouseposService,
    @Inject(DOCUMENT) private document,
    ) {}

  ngOnInit() {
    this.baseCtx = (this.baseCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
    this.selfCtx = (this.selfCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
    this.myBrush = new Brush(this.selfCtx);
  }

  onMouseDown(e: MouseEvent) {
    const {x, y} = this.mouse.getMousePos(e, this.baseCtx.canvas);
    if (e.buttons === 1) {
      this.myBrush
        .setColor([23, 100, 0, 0.4])
        .setSize(20)
        .startAt(x, y)
        .drawTo(x, y);
    }
  }

  onMouseMove(e: MouseEvent) {
    const {x, y} = this.mouse.getMousePos(e, this.baseCtx.canvas);
    if (e.buttons === 1) {
      this.myBrush.drawTo(x, y);
    }
  }

  onMouseUp(e: MouseEvent) {
    if (this.myBrush.isDrawing()) {
      this.myBrush
        .end()
        .setOn(this.baseCtx)
        .reset();
    }
  }
}

