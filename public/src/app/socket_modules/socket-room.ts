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
        this.currUsername = data['username'];
        observer.next(data);
      });
    });
  }

  onPeersCanvasRequest() {
    return Observable.create((observer) => {
      this.socket.on('peersCanvasRequest', (data) => {
        observer.next(data);
      });
    });
  }

  emitCanvasData(data) {
    this.socket.emit('canvasDataToPeer',  data );
  }


  onCanvasDataReceived() {
    return Observable.create((observer) => {
      this.socket.on('canvasDataReceived', (data) => {
        observer.next(data);
      });
    });
  }

  onStrokeLogSignal() {
    return Observable.create((observer) => {
      this.socket.on('strokeLogFetch', (data) => {
        observer.next(data);
      });
    });
  }

  onSnapshotSignal() {
    return Observable.create((observer) => {
      this.socket.on('snapShotFetch', (data) => {
        observer.next(data);
      });
    })
  }

  onSnapshotPoll() {
    return Observable.create((observer) => {
      this.socket.on('snapShotPoll', (data) => {
        observer.next(data);
      });
    })
  }

  onSnapshotPollFinish() {
    return Observable.create((observer) => {
      this.socket.on('snapShotPollFinish', () => {
        observer.next();
      });
    })
  }

  sendSnapshot(data) {
    this.socket.emit('snapShot', data);
  }

  emitTokenConsumption() {
    this.socket.emit('tokenConsumed')
  }

  onTokenConsumption(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('roomTokenConsumed', data => {
        observer.next(data);
      });
    });
  }


  
}