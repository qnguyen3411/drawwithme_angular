
export class DrawSocketModule {
  socket: SocketIOClient.Socket;
  room: string;
  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
  }

  setRoom(room: string) {
    this.room = room;
  }

  emitMousePosUpdate(x, y) {
    this.socket.emit('mousePosUpdate', {room: this.room, data: {x, y}});
  }

  emitCanvasActionStart(actionData) {
    this.socket.emit('actionStart', {room: this.room, data: actionData });
  }

  emitCanvasActionEnd() {
    this.socket.emit('actionEnd');
  }

  onPeersMousePosUpdate() {
  
  }

  onPeersCanvasActionStart() {

  }

  onPeersCanvasActionEnd() {

  }
}