import { SessionService } from '../services/session.service';

// Handles room administrative tasks such as
// Tokens and updating user list
export class ConnectionSocketModule {
  private socket: SocketIOClient.Socket;
  private session: SessionService;
  constructor(
    sessionService: SessionService,
    socket: SocketIOClient.Socket
  ) {
    this.session = sessionService;
    this.socket = socket;
  }

  joinRoom(room: string) {
    this.connect();
    const token = this.session.getUserToken();
    this.socket.emit('join', { room, token });
  }

  leaveRoom() {
    this.disconnect();
  }

  private connect() {
    this.socket.connect();
  }

  private disconnect() {
    this.socket.disconnect();
  }

  onForceDisconnect() {

  }



}