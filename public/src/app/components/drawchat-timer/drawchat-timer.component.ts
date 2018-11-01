import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';

import { SocketsService } from '../../services/sockets.service';
import { DrawchatTokenCalculatorService } from '../../services/drawchat-token-calculator.service';
import { Timer } from '../../timer_modules/timer';

@Component({
  selector: 'app-drawchat-timer',
  templateUrl: './drawchat-timer.component.html',
  styleUrls: ['./drawchat-timer.component.css'],
  providers: [DrawchatTokenCalculatorService],
})
export class DrawchatTimerComponent implements OnInit {
  tokenCountdown: string;
  roomCountdown: string;
  tokensRemaining: number;

  tokenTimer: Timer;
  expireTimer: Timer;


  constructor(
    private tokenCalculator: DrawchatTokenCalculatorService,
    private socket: SocketsService
  ) { }

  ngOnInit() {
    this.socket.roomModule.onReceivingRoomInfo()
      .subscribe(room => {

        this.tokenCalculator.createdAt = new Date(room['created_at']).getTime();
        this.tokenCalculator.expiresAt = new Date(room['expires_at']).getTime();

        this.initializeTimers();
      })

    this.socket.roomModule.onTokenConsumption()
      .subscribe(this.onTokenConsumed.bind(this));
  }

  initializeTimers() {
    this.tokenTimer = new Timer(this.tokenCalculator.getTimeTilNextToken());
    this.tokenTimer.observable.subscribe(timeStr => { this.tokenCountdown = timeStr });
    const tokenSub = this.tokenTimer.onTimeOut.subscribe(() => {
      const tokensAvailable = this.tokenCalculator.getTokensAvailable()
      if (tokensAvailable) {
        this.tokensRemaining++;
      } else {
        tokenSub.unsubscribe()
      }
    });

    this.expireTimer = new Timer(this.tokenCalculator.getTimeTilExpire());
    this.expireTimer.observable.subscribe(timeStr => { this.roomCountdown = timeStr });
    this.expireTimer.onTimeOut.subscribe(() => { })

    this.tokensRemaining = this.tokenCalculator.getTokensAvailable();

  }

  consumeToken() {
    this.socket.roomModule.emitTokenConsumption();
  }

  onTokenConsumed({newExpireDate}) {
    const now = new Date().getTime();
    this.tokenCalculator.expiresAt = newExpireDate;
    this.tokensRemaining = this.tokenCalculator.getTokensAvailable();
    this.expireTimer.setTime(now - newExpireDate);
  }

}
