import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { SessionService } from '../services/session.service';
import { DrawSocketModule } from '../socket_modules/socket-draw';
import { RoomSocketModule } from '../socket_modules/socket-room';
import { ChatSocketModule } from '../socket_modules/socket-chat';
import { ConnectionSocketModule } from '../socket_modules/socket-connection';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  private url = environment.endpoints.socketServer;
  private socket: SocketIOClient.Socket;
  private room: string;

  connectionModule: ConnectionSocketModule;
  drawModule: DrawSocketModule;
  roomModule: RoomSocketModule;
  chatModule: ChatSocketModule;

  constructor(private session: SessionService) {
    this.socket = io(this.url, { autoConnect: false });
    this.connectionModule = new ConnectionSocketModule(this.session, this.socket);
    this.drawModule = new DrawSocketModule(this.socket);
    this.roomModule = new RoomSocketModule(this.socket);
    this.chatModule = new ChatSocketModule(this.socket);
  }

  connect() {
    this.socket = io(this.url);
  }

}
