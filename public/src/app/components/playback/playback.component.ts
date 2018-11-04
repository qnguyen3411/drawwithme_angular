import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { map, delay, concatMap, tap, windowCount, mergeAll, withLatestFrom } from 'rxjs/operators';
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

  
  lowCtx: CanvasRenderingContext2D;
  upCtx: CanvasRenderingContext2D;
  
  strokeLog = [];
  
  playSpeedObs: Observable<number>;
  playbackStarted = false;

  currPlaySpeed = 50;

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

    // this.playSpeedObs = of(50, 1000)
    
    this._drawChatService.fetchLog(this.roomId)
      .pipe(map(data => data as Array<StrokeData>))
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
          concatMap(pt => of(pt).pipe(delay(this.currPlaySpeed))), // wait 
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


  setPlaySpeed(spd: number) {
    this.currPlaySpeed = spd;
  }
}
