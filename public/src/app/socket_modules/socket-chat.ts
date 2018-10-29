
export class ChatSocketModule {
  socket: SocketIOClient.Socket;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
  }

  emitNewMessage(message: string) {

  }

  onNewMessage() {

  }

}