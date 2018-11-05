import { Observable } from 'rxjs';

export class DrawSocketModule {
  private socket: SocketIOClient.Socket;

  constructor(socket: SocketIOClient.Socket) {
    // this.socketsService
    this.socket = socket;
  }

  emitCursorSizeUpdate(data) {
    this.socket.emit('cursorSizeUpdate', { data });
  }

  emitMousePosUpdate(data) {
    this.socket.emit('mousePosUpdate', { data });
  }

  emitCanvasActionStart(data) {
    this.socket.emit('canvasActionStart', { data });
  }

  emitCanvasActionEnd(data) {
    this.socket.emit('canvasActionEnd', { data });
  }


  onPeersCursorSizeUpdate() {
    return Observable.create((observer) => {
      this.socket.on('peersCursorSizeUpdate', (data) => {
        observer.next(data);
      })
    })
  }

  onPeersMousePosUpdate() {
    return Observable.create((observer) => {
      this.socket.on('peersMousePosUpdate', (data) => {
        observer.next(data);
      });
    });
  }

  onPeersCanvasActionStart() {
    return Observable.create((observer) => {
      this.socket.on('peersCanvasActionStart', (data) => {
        observer.next(data);
      });
    });
  }

  onPeersCanvasActionEnd() {
    return Observable.create((observer) => {
      this.socket.on('peersCanvasActionEnd', (data) => {
        observer.next(data);
      });
    });
  }

  emitSnapshot() {
    this.socket.emit('snapShot');
  }

  

}