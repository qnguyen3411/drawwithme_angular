
export class ChatSocketModule {
  private socket: SocketIOClient.Socket;

  constructor(socket: SocketIOClient.Socket) {
    // this.socketsService
    this.socket = socket;
  }

  emitNewMessage(message: string) {

  }

  onNewMessage() {

  }

}