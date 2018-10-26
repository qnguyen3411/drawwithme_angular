import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { DrawchatService } from '../../services/drawchat.service';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.css']
})
export class PlaybackComponent implements OnInit {
  @Input() roomId;

  @ViewChild('lower') lowerRef: ElementRef
  @ViewChild('upper') upperRef: ElementRef

  playbackStarted = false;

  lowCtx: CanvasRenderingContext2D;
  upCtx: CanvasRenderingContext2D;

  strokeLog = [];

  constructor(
    private _drawChatService: DrawchatService,
  ) { }

  ngOnInit() {
    this.lowCtx = this.lowerRef.nativeElement.getContext('2d');
    this.upCtx = this.upperRef.nativeElement.getContext('2d');
  }

  canvasClicked() {
    if (this.playbackStarted) { return; }
    this.playbackStarted = true;
    this._drawChatService.fetchLog(this.roomId).subscribe(data => {
      this.strokeLog = JSON.parse("[" + data.slice(0, -1) + "]");
      this.startDrawing();
    })
  }

  startDrawing() {
    if (!this.strokeLog) { return };
    let strokeIndex = 0;
    let pathIndex = 0;

    let currStrokeObj: Stroke;
    let currStroke = this.strokeLog[0]
    let x = currStroke['x'] as Array<number>
    let y = currStroke['y'] as Array<number>

    const playback = setInterval(() => {
      if (strokeIndex >= this.strokeLog.length) { clearInterval(playback) }
      if (pathIndex === 0) {
        currStrokeObj = new Stroke(this.upCtx)
          .setColor(currStroke['rgba'])
          .setSize(currStroke['size'])
          .startAt(currStroke['x'][0], currStroke['y'][0])
        pathIndex++;
      } else if (pathIndex >= x.length) {
        currStrokeObj.end().setOn(this.lowCtx);

        strokeIndex++;
        if (strokeIndex >= this.strokeLog.length) { 
          clearInterval(playback) 
          return;
        }
        currStroke = this.strokeLog[strokeIndex];
        x = currStroke['x'] as Array<number>
        y = currStroke['y'] as Array<number>
    
        pathIndex = 0;
      } else {
        currStrokeObj.drawTo(x[pathIndex], y[pathIndex])
        pathIndex++;

      }
    }, 50)
  }

}

class Stroke {
  ctx: CanvasRenderingContext2D;
  rgba: any[];
  size: number;
  x: number[];
  y: number[];
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;

  constructor(ctx) {
    this.ctx = ctx;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.rgba = [0, 0, 0, 1];
    this.size = 1;
    this.x = [];
    this.y = [];
  }

  setColor(rgba) {
    const cssString = `rgba(${rgba.join(', ')})`;
    this.rgba = rgba;
    this.ctx.strokeStyle = cssString;
    this.ctx.fillStyle = cssString;
    return this;
  }

  setSize(size) {
    this.size = size;
    this.ctx.lineWidth = size;
    return this;
  }

  draw(ctx) {
    ctx.beginPath();
    if (this.x.length === 1) { // if drawing a dot
      ctx.lineWidth = 1;
      ctx.arc(this.x[0], this.y[0], this.size / 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.lineWidth = this.size;
    } else {
     
      const len = this.x.length;
      
      ctx.moveTo(this.x[0], this.y[0]);
      for (let i = 1; i < len; i++) {
        ctx.lineTo(this.x[i], this.y[i]);
      }
      ctx.stroke();
    }
    return this;
  }

  startAt(startX, startY) {
    this.x = [startX];
    this.y = [startY];
    this.minX = startX;
    this.maxX = startX;
    this.minY = startY;
    this.maxY = startY;
    this.draw(this.ctx);
    return this;
  }

  drawTo(newX, newY) {
    // Keep track of max and min
    if (this.minX > newX) { this.minX = newX }
    else if (this.maxX < newX) { this.maxX = newX };
    if (this.minY > newY) { this.minY = newY }
    else if (this.maxY < newY) { this.maxY = newY };

    this.x.push(newX);
    this.y.push(newY);
    const pts = this.boundingRectPoints();
    this.ctx.clearRect(pts[0], pts[1], pts[2], pts[3]);
    this.draw(this.ctx);
    return this;
  }

  end() {
    const pts = this.boundingRectPoints();
    this.ctx.clearRect(pts[0], pts[1], pts[2], pts[3]);
    return this;
  }

  setOn(baseCtx) {
    const saved = {
      lineWidth: baseCtx.lineWidth,
      lineCap: baseCtx.lineCap,
      lineJoin: baseCtx.lineJoin,
      fillStyle: baseCtx.fillStyle,
      strokeStyle: baseCtx.strokeStyle
    }
    const keys = Object.keys(saved);
    keys.forEach(key => {
      baseCtx[key] = this.ctx[key];
    });
    this.draw(baseCtx);
    keys.forEach(key => {
      baseCtx[key] = saved[key];
    });
    return this;
  }

  boundingRectPoints() {
    const { width, height } = this.ctx.canvas;
    const radius = this.size / 2;
    return [
      Math.max(this.minX - radius, 0),
      Math.max(this.minY - radius - 5, 0), // Magic number alert
      Math.min(this.maxX + radius, width),
      Math.min(this.maxY + radius, height),
    ]
  }

}