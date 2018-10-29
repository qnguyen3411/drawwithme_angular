
export class RoomSocketModule {
  socket: SocketIOClient.Socket;
  roomId: string;

  constructor(socket: SocketIOClient.Socket) {
    this.socket = socket;
  }

  joinRoom(roomId: string) {
    this.roomId = roomId;
    // emit join
  }

  leaveRoom() {
    this.roomId = "";
  }

  emitTokenConsumption() {

  }

  onTokenConsumption() {

  }

  onRecievingRoomInfo() {

  }

  onPeerJoin() {

  }

  onPeerLeave() {

  }

  onForceDisconnect() {

  }

}