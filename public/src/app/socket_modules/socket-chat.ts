import { Observable } from 'rxjs';

export class ChatSocketModule {
  private socket: SocketIOClient.Socket;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
  }

  emitNewMessage(message: string) {
    this.socket.emit('chatMessageSent', { data: message });
  }

  onNewMessage(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('peersChatMessageSent', (data) => {
        observer.next(data);
      })
    })
  }

}