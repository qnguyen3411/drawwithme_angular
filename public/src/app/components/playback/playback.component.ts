import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { map, delay, concatMap, tap, windowCount, mergeAll } from 'rxjs/operators';
import { PaintCursor } from '../../draw_modules/paintcursor';
import { DrawchatService } from '../../services/drawchat.service';
import { from, zip, of, Observable } from 'rxjs';


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

  playClicked() {
    if (this.playbackStarted) { return; }
    this.playbackStarted = true;
    this._drawChatService.fetchLog(this.roomId)
      .pipe(map(data =>
        data as StrokeData[])
      )
      .subscribe(this.startDrawing.bind(this));
  }

  startDrawing(strokeLog: StrokeData[]) {
    const brush = new PaintCursor(this.lowCtx).setUpperLayer(this.upCtx);

    const startNewStroke = (stroke: StrokeData) => {
      brush.endAction()
        .setColor(stroke.rgba).setSize(stroke.size)
        .moveTo(stroke.x[0], stroke.y[0])
        .startAction();
    };

    const moveAlongPath = (stroke: StrokeData) => {
      return zip(from(stroke.x), from(stroke.y)) // Zip x, y together into a point
        .pipe(
          windowCount(50),
          mergeAll(),
          concatMap(pt => of(pt).pipe(delay(50))), // wait 
          map(pt => brush.moveTo(pt[0], pt[1])) // move brush to next point
        )
    }

    const drawStroke = (stroke: StrokeData) => 
      of(stroke)
      .pipe(
        tap(startNewStroke),
        concatMap(moveAlongPath)
        );

    // Execute
    
    from(strokeLog)
      .pipe(
        windowCount(50),
        mergeAll(),
        concatMap(drawStroke))
      .subscribe();
  }
}
