import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/services/sockets.service';

@Component({
  selector: 'app-drawchat-userlist',
  templateUrl: './drawchat-userlist.component.html',
  styleUrls: ['./drawchat-userlist.component.css']
})
export class DrawchatUserlistComponent implements OnInit {

  peerList = {};
  ownUsername = "";

  constructor(private socket: SocketsService) { }

  ngOnInit() {
    
    this.subscribeToRoomEvents()
  }

  subscribeToRoomEvents() {
    this.socket.roomModule.onPeerJoin()
      .subscribe(this.addToPeerList.bind(this));

    this.socket.roomModule.onReceivingUserList()
      .subscribe(this.initializePeerList.bind(this));
    
    this.socket.roomModule.onPeerLeave()
      .subscribe(this.removeFromPeerList.bind(this));
    
    this.socket.roomModule.onUsernameAssigned()
      .subscribe(this.setOwnUsername.bind(this));
  }

  addToPeerList({username, id}) {
    this.peerList[id] = username;
  }

  initializePeerList(peerList) {
    Object.entries(peerList).forEach(([id, data]) =>
      this.addToPeerList({ username: data['username'] , id }) 
    );
  }

  removeFromPeerList({ id }) {
    if (this.peerList[id]) {
      delete this.peerList[id];
    }
  }
  
  setOwnUsername({username}) {
    this.ownUsername = username;
  }


}
