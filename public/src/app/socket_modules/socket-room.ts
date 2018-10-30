import { Observable } from 'rxjs';


// Handles room administrative tasks such as
// Tokens and updating user list
export class RoomSocketModule {
  private socket: SocketIOClient.Socket;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
  }

  onReceivingRoomInfo() {
    return Observable.create((observer) => {
      this.socket.on('roomInfo', data => {
        observer.next(data);
      });
    });
  }

  onReceivingUserList() {
    return Observable.create((observer) => {
      this.socket.on('userList', data => {
        console.log("IN OBSERVABLE")
        console.log(data)
        observer.next(data);
      });
    });
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
    return Observable.create((observer) => {
      this.socket.on('peerLeft', data => {
        observer.next(data);
      });
    });

  }

}