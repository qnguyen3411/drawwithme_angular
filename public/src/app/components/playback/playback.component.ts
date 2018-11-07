import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { map, delay, concatMap, tap, windowCount, mergeAll, take } from 'rxjs/operators';
import { PaintCursor } from '../../draw_modules/paintcursor';
import { DrawchatService } from '../../services/drawchat.service';
import { from, zip, of } from 'rxjs';


interface StrokeData {
  rgba: any[];
  size: number;
  x: number[];
  y: number[];
}

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.css']
})
export class PlaybackComponent implements OnInit {
  @Input() roomId;

  @ViewChild('lower') lowerRef: ElementRef
  @ViewChild('upper') upperRef: ElementRef


  baseCtx: CanvasRenderingContext2D;
  topCtx: CanvasRenderingContext2D;

  strokeLog = [];

  playbackStarted = false;

  currPlaySpeed = 50;

  constructor(
    private _drawChatService: DrawchatService,
  ) { }

  ngOnInit() {
    this.baseCtx = this.lowerRef.nativeElement.getContext('2d');
    this.topCtx = this.upperRef.nativeElement.getContext('2d');
  }

  playClicked() {
    if (this.playbackStarted) { return; }
    this.playbackStarted = true;

    this._drawChatService.fetchLog(this.roomId)
      .pipe(
        take(1),
        map(data => data as Array<StrokeData>),
        concatMap(this.startDrawing.bind(this))
      )
      .subscribe();
  }

  startDrawing(strokeLog: StrokeData[]) {
    const delayVal = (interval: number) =>
      (val: [number, number]) => of(val).pipe(delay(interval));

    const startNewStroke = (brush: PaintCursor) => 
      ({ rgba, size, x, y }: StrokeData) => {
        brush.endAction()
          .setColor(rgba).setSize(size)
          .moveTo(x[0], y[0])
          .startAction();
    };

    const moveAlongPath = (brush: PaintCursor) => 
      ({ x, y }: StrokeData) =>
       // Zip pathX, pathY together into a an array of points
        zip(from(x), from(y))
          .pipe(
            windowCount(50),
            mergeAll(),
            concatMap(delayVal(this.currPlaySpeed)), 
            map(([x, y]) => { brush.moveTo(x, y) }) // Map each point into a move operation
          );

    const drawStroke = (brush: PaintCursor) => (stroke: StrokeData) =>
      of(stroke)
        .pipe(
          tap(startNewStroke(brush)),
          concatMap(moveAlongPath(brush))
        );

    const drawWithBrush = (brush: PaintCursor) =>
      from(strokeLog)
        .pipe(
          windowCount(50),
          mergeAll(),
          concatMap(drawStroke(brush))
        );
        
    // Execute
    return of(new PaintCursor(this.baseCtx).setUpperLayer(this.topCtx))
      .pipe(concatMap(drawWithBrush))
  }

  setPlaySpeed(spd: number) {
    this.currPlaySpeed = spd;
  }
}
