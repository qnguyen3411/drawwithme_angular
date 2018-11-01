import { Injectable } from '@angular/core';
import { DrawchatService } from './drawchat.service';

// TODO: Double responsibility - keeping the room state and 
@Injectable({
  providedIn: 'root'
})
export class DrawchatTokenCalculatorService {
  private TOKEN_CAP;
  private TOKEN_INTERVAL;
  private TOKEN_TIME_VALUE;

  createdAt: number;
  expiresAt: number;

  constructor(private drawChatService: DrawchatService) {
    this.drawChatService.fetchRoomTokenConfig()
      .subscribe(response => {
        this.TOKEN_CAP = response['tokenCap'];
        this.TOKEN_INTERVAL = response['tokenInterval'];
        this.TOKEN_TIME_VALUE = response['tokenTimeValue'];
      })
  }

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

    if (this.getTokensConsumed >= this.TOKEN_CAP) {
      return null;
    }
    const timeSinceLastToken = (now - this.createdAt) % this.TOKEN_INTERVAL;
    return this.TOKEN_INTERVAL - timeSinceLastToken;
  }

  getTimeTilExpire() {
    const now = new Date().getTime();
    return Math.max(this.expiresAt - now, 0);
  }



}
