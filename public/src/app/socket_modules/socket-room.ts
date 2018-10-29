import { Observable } from 'rxjs';


// Handles room administrative tasks such as
// Tokens and updating user list
export class RoomSocketModule {
  private socket: SocketIOClient.Socket;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
  }

  onReceivingRoomInfo() {

  }

  emitTokenConsumption() {

  }

  onTokenConsumption() {

  }

  onPeerJoin() {
    return Observable.create((observer) => {
      this.socket.on('peerJoined', data => {
        observer.next(data);
      });
    });
  }

  onPeerLeave() {

  }

}