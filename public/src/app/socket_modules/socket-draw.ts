import { Observable } from 'rxjs';

export class DrawSocketModule {
  private socket: SocketIOClient.Socket;

  constructor(socket: SocketIOClient.Socket) {
    // this.socketsService
    this.socket = socket;
  }

  emitCursorSizeUpdate(size: number) {
    this.socket.emit('cursorSizeUpdate', { data: size });
  }

  emitMousePosUpdate(x: number, y: number) {
    this.socket.emit('mousePosUpdate', { data: { x, y } });
  }

  emitCanvasActionStart(actionData) {
    this.socket.emit('canvasActionStart', { data: actionData });
  }

  emitCanvasActionEnd() {
    this.socket.emit('actionEnd');
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
      this.socket.on('peersCanvasActionStart', actionData => {
        observer.next(actionData);
      });
    });
  }

  onPeersCanvasActionEnd() {

  }
}