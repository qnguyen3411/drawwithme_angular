import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';

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
        observer.next(data);
      });
    });
  }


  onPeerJoin(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('peerJoined', data => {
        observer.next(data);
      });
    });
  }

  onPeerLeave(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('peerLeft', data => {
        observer.next(data);
      });
    });

  }

  onUsernameAssigned(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('assignedUsername', data => {
        observer.next(data);
      });
    });
  }

  emitTokenConsumption() {
    this.socket.emit('tokenConsumed')
  }

  onTokenConsumption() {
    return Observable.create((observer) => {
      this.socket.on('tokenConsumed', data => {
        observer.next(data);
      });
    });
  }

}