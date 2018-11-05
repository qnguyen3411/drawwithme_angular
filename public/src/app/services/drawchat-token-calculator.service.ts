import { Injectable } from '@angular/core';
import { DrawchatService } from './drawchat.service';
import { environment } from '../../environments/environment';
// TODO: Double responsibility - keeping the room state and 
@Injectable({
  providedIn: 'root'
})
export class DrawchatTokenCalculatorService {
  private TOKEN_CAP = environment.roomTimer.tokenCap;
  private TOKEN_INTERVAL = environment.roomTimer.tokenIntervals;
  private TOKEN_TIME_VALUE = environment.roomTimer.tokenTimeValue;

  createdAt: number;
  expiresAt: number;

  constructor(private drawChatService: DrawchatService) {}

  roomIsActive() {
    const now = new Date().getTime();
    return now < this.expiresAt;
  }

  getTokensConsumed() {
    return Math.round((this.expiresAt - this.createdAt) / this.TOKEN_TIME_VALUE) - 1;
  }

  getTokensAvailable() {
    const now = new Date().getTime();
    const tokensReceivedByNow = Math.floor((now - this.createdAt) / this.TOKEN_INTERVAL);
    return Math.min(tokensReceivedByNow, this.TOKEN_CAP) - this.getTokensConsumed();
  }

  getTimeTilNextToken() {
    const now = new Date().getTime();

    if (this.getTokensConsumed() >= this.TOKEN_CAP) {
      return null;
    }
    const timeSinceLastToken = (now - this.createdAt) % this.TOKEN_INTERVAL;
    return this.TOKEN_INTERVAL - timeSinceLastToken;
  }

  getTimeTilExpire() {
    const now = new Date().getTime();
    return Math.max(this.expiresAt - now, 0);
  }

  getTokenInterval() {
    return this.TOKEN_INTERVAL;
  }



}
