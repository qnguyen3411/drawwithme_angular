import { Component, OnInit, Input, Compiler, ViewChild } from '@angular/core';
import { Brush } from '../../draw_modules/brush';
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
  myBrush: Brush;


  constructor(
    private compiler: Compiler,
    private mouse: MouseposService,
    ) {}

  ngOnInit() {
    this.baseCtx = (this.baseCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.selfCtx = (this.selfCanvasRef.nativeElement as HTMLCanvasElement).getContext('2d');
    this.myBrush = new Brush(this.selfCtx);

  }

  onMouseDown(e: MouseEvent) {
    if (e.buttons === 1) {
      const {x, y} = this.mouse.getMousePos(e, this.baseCtx.canvas);
      this.myBrush
        .setColor(this.brushSettings['rgba'])
        .setSize(this.brushSettings['size'])
        .startAt(x, y)
    }
  }

  onMouseMove(e: MouseEvent) {
    const {x, y} = this.mouse.getMousePos(e, this.baseCtx.canvas);
    if (e.buttons === 1) {
      this.myBrush.drawTo(x, y);
    }
  }

  onMouseUpOrLeave(e: MouseEvent) {
    if (this.myBrush.isDrawing()) {
      this.myBrush
        .setOn(this.baseCtx)
        .reset();
    }
  }
}

