import { Observable } from 'rxjs';

export class DrawSocketModule {
  private socket: SocketIOClient.Socket;

  constructor(socket: SocketIOClient.Socket) {
    // this.socketsService
    this.socket = socket;
  }

  emitCursorSizeUpdate(size: number) {
    this.socket.emit('sizeUpdate', { data: size });
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

  onPeersMousePosUpdate() {
    return Observable.create((observer) => {
      this.socket.on('peersMousePosUpdate', ({ x, y }) => {
        observer.next(x, y);
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