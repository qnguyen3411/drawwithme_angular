import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { map, delay, concatMap, mergeMap, finalize } from 'rxjs/operators';
import { PaintCursor } from '../../draw_modules/paintcursor';
import { DrawchatService } from '../../services/drawchat.service';
import { from, zip, timer, of, Observable } from 'rxjs';
import { Brush } from 'src/app/draw_modules/brush';


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
    const startStrokeWithBrush = (stroke: StrokeData) => {
      brush.endAction()
        .setColor(stroke.rgba)
        .setSize(stroke.size)
        .moveTo(stroke.x[0], stroke.y[0])
        .startAction();
      return stroke;
    };

    const drawPath = (stroke: StrokeData): Observable<any> => {
      return zip(from(stroke.x), from(stroke.y))
        .pipe(
          concatMap(pt => of(pt).pipe(delay(50))),
          map(data => brush.moveTo(data[0], data[1]))
        )
    }


    from(strokeLog)
      .pipe(
        concatMap(stroke => {

          return of(startStrokeWithBrush(stroke)).pipe(
            concatMap(drawPath)
          )
        })
      )
      .subscribe()

  }


  drawPath(stroke: StrokeData): Observable<[number, number]> {
    return zip(from(stroke.x), from(stroke.y))
      .pipe(
        concatMap(pt => of(pt)
          .pipe(delay(50))
        )
      )
  }


}
