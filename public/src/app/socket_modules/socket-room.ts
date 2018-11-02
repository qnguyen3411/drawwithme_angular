import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';

// Handles room administrative tasks such as
// Tokens and updating user list
export class RoomSocketModule {
  private socket: SocketIOClient.Socket;
  currUsername: string;

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

  emitInfoToPeer({peerId, data}: {peerId: string, data: any}) {
    this.socket.emit('shareInfoWithPeer', {id: peerId, data: data});
  }

  onReceivingPeerInfo() {
    return Observable.create((observer) => {
      this.socket.on('peerInfoShared', data => {
        observer.next(data);
      });
    });
  }

  onPeerJoin(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('peerJoined', data => {
        this.socket.emit('shareInfoWithPeer', {id: data['id'], data: this.currUsername})
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
        console.log("RECEIVED USERNAME,", data)
        this.currUsername = data['username'];
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