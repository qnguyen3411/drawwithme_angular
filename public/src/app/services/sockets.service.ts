import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { DrawSocketModule } from '../socket_modules/socket-draw';
import { RoomSocketModule } from '../socket_modules/socket-room';
import { ChatSocketModule } from '../socket_modules/socket-chat';


@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  private url = 'http://localhost:5000';
  private socket : SocketIOClient.Socket;
  drawModule: DrawSocketModule;
  roomModule: RoomSocketModule;
  chatModule: ChatSocketModule;

  constructor() { 
    this.socket = io(this.url, {autoConnect: false});
    this.drawModule = new DrawSocketModule(this.socket);
    this.roomModule = new RoomSocketModule(this.socket);
    this.chatModule = new ChatSocketModule(this.socket);
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  getChatModule() {
    return this.chatModule;
  }

  getDrawModule() {
    return this.drawModule;
  }

  getRoomModule() {
    return this.roomModule;
  }


}
