import { Component, OnInit, Input,
  Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DrawchatService } from '../../services/drawchat.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, OnChanges {
  @Output() queryEmitted = new EventEmitter();
  @Input() roomToShow = {};


  constructor(
    private _drawChatService: DrawchatService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
  }

  playbackClicked(event) {
    // if (!this.roomToShow || !this.roomToShow['id']) { return }
    // this._drawChatService
    //   .fetchLog(this.roomToShow['id'])
    //   .subscribe(data => {
    //     this.strokeLog = JSON.parse("[" + data.slice(0, -1) + "]")
    //     this.startDrawing();
    //   })
  }

  currentlyShowingRoom() {
    return Object.keys(this.roomToShow).length !== 0
  }

  userClicked(user) {
    this.queryEmitted.emit({ user })
  }

  tagClicked(tag) {
    this.queryEmitted.emit({ tag })
  }

  // startDrawing() {
  //   if (!this.strokeLog) { return };
  //   let strokeIndex = 0;
  //   let pathIndex = 0;
  //   setInterval(() => {
  //     const currStroke = this.strokeLog[strokeIndex];
  //     const pathLength = (currStroke['x'] as Array<number>).length
  //     if (pathIndex === 0) {
  //       this.startStroke(currStroke);
  //     } else if (pathIndex >= pathLength) {
  //       this.endStroke(currStroke);
  //       strokeIndex++;
  //       pathIndex = 0;
  //     } else {
  //       this.updateStroke(currStroke, pathIndex);
  //       pathIndex++;
  //     }
  //   }, 50)
  // }

  // startStroke(stroke) {
  //   const cssString = `rgba(
  //     ${stroke['rbga'][0]}, ${stroke['rbga'][1]},
  //     ${stroke['rbga'][2]}, ${stroke['rbga'][3]})`
  //   this.lowCtx.strokeStyle = cssString;
  //   this.lowCtx.fillStyle = cssString;
  //   this.lowCtx.lineWidth = stroke['size'];
  //   this.upCtx.strokeStyle = cssString;
  //   this.upCtx.fillStyle = cssString;
  //   this.upCtx.lineWidth = stroke['size'];
  // }

  // endStroke(stroke) {
  //   const { width, height } = this.lowCtx.canvas;
  //   const x = stroke['x'] as Array<number>;
  //   const y = stroke['y'] as Array<number>;

  //   this.upCtx.clearRect(0, 0, width, height);
  //   this.upCtx.beginPath()
  //   this.lowCtx.moveTo(x[0], y[0])
  //   for (let i = 0; i < x.length; i++) {
  //     this.lowCtx.lineTo(x[i], y[i])
  //   }
  //   this.lowCtx.stroke();
  // }

  // updateStroke(stroke, index) {
  //   const { width, height } = this.upCtx.canvas;
  //   const x = stroke['x'] as Array<number>;
  //   const y = stroke['y'] as Array<number>;
  //   this.upCtx.clearRect(0, 0, width, height);
  //   this.upCtx.beginPath()
  //   this.upCtx.moveTo(x[0], y[0])
  //   for (let i = 0; i < index; i++) {
  //     this.upCtx.lineTo(x[i], y[i])
  //   }
  //   this.upCtx.stroke();
  // }
}
