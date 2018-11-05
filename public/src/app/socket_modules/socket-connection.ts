import { SessionService } from '../services/session.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
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

  emitTimeOut() {
    this.socket.emit('timeOut');
  }

  leaveRoom() {
    this.disconnect();
  }

  connect() {
    console.log("CONNECTING")
    this.socket.connect();
  }

  private disconnect() {
    this.socket.disconnect();
  }

  isConnected() {
    return this.socket.connected;
  }

  onForceDisconnect(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('forceDisconnect', () => {
        observer.next();
      });
    });
  }



}