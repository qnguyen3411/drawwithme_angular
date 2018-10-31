import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';

import { SocketsService } from '../../services/sockets.service';
import { DrawchatTokenCalculatorService } from '../../services/drawchat-token-calculator.service';

@Component({
  selector: 'app-drawchat-timer',
  templateUrl: './drawchat-timer.component.html',
  styleUrls: ['./drawchat-timer.component.css'],
  providers: [DrawchatTokenCalculatorService],
})
export class DrawchatTimerComponent implements OnInit {
  // calculator;

  tokenCountdown: string;
  roomCountdown: string;
  tokensRemaining: number;

  constructor(
    private tokenCalculator: DrawchatTokenCalculatorService,
    private socket: SocketsService
  ) { }

  ngOnInit() {

    this.socket.roomModule.onReceivingRoomInfo()
      .pipe(
        map(this.tokenCalculator.getCalculatorForRoom
          .bind(this.tokenCalculator))
      )
      .subscribe(calculator => {

        this.initializeTimer(calculator.getTimeTilNextToken())
          .subscribe(timeStr => {
            this.tokenCountdown = timeStr;
          });

        this.initializeTimer(calculator.getTimeTilExpire()) 
          .subscribe(timeStr => {
            this.roomCountdown = timeStr;
          })
        
        this.tokensRemaining = calculator.getTokensAvailable();
      })

  }

  

  initializeTimer(timeInMs: number) {
    return interval(1000).pipe(
      map((val) => this.formatTime(timeInMs - val * 1000)),
    )
  }

  formatTime(t: number) {
    const hours = Math.floor(t / (3600 * 1000))
    t -= hours * (3600 * 1000)
    const minutes = Math.floor(t / (60 * 1000)) % 60
    t -= minutes * (60 * 1000)
    const seconds = Math.floor(t / (1000)) % 1000;
    return [hours + 'h', minutes + 'm', seconds + 's'].join(' ')
  }

}
