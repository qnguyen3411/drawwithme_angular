import { Injectable } from '@angular/core';
import { DrawchatService } from './drawchat.service';
@Injectable({
  providedIn: 'root'
})
export class DrawchatTokenCalculatorService {
  private tokenConfig;
  private TOKEN_CAP;
  private TOKEN_INTERVAL;
  private TOKEN_TIME_VALUE;
  constructor(private drawChatService: DrawchatService) {
    this.drawChatService.fetchRoomTokenConfig()
      .subscribe(response => {
        this.TOKEN_CAP = response['tokenCap'];
        this.TOKEN_INTERVAL = response['tokenInterval'];
        this.TOKEN_TIME_VALUE = response['tokenTimeValue'];
      })
  }

  getCalculatorForRoom(room) {
    console.log(room)
    const expiresAt = new Date(room['expires_at']).getTime();
    const createdAt = new Date(room['created_at']).getTime();
    const now = new Date().getTime();
    const tokenCap = this.TOKEN_CAP;
    const tokenInterval = this.TOKEN_INTERVAL;
    const tokenTimeValue = this.TOKEN_TIME_VALUE;

    return {
      roomIsActive() {
        return now < expiresAt;
      },

      getTokensConsumed() {
        return Math.round((expiresAt - createdAt) / tokenTimeValue) - 1;
      },

      getTokensAvailable() {
        const tokensReceivedSoFar = Math.round((now - createdAt) / tokenInterval);
        return tokensReceivedSoFar - this.getTokensConsumed();
      },

      getTimeTilNextToken() {
        if (this.getTokensConsumed >= tokenCap) {
          return null;
        }
        const timeSinceLastToken = (now - createdAt) % tokenInterval;
        return tokenInterval - timeSinceLastToken;
      },

      getTimeTilExpire() {
        return Math.max(expiresAt - now, 0);
      }
    }
  }



}
