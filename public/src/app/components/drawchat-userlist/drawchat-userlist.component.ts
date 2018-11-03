import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SocketsService } from 'src/app/services/sockets.service';

@Component({
  selector: 'app-drawchat-userlist',
  templateUrl: './drawchat-userlist.component.html',
  styleUrls: ['./drawchat-userlist.component.css']
})
export class DrawchatUserlistComponent implements OnInit, OnDestroy {

  peerList = {};
  ownUsername = "";

  constructor(private socket: SocketsService) { }
  destroy: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {

    this.subscribeToRoomEvents()
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  subscribeToRoomEvents() {
    this.socket.roomModule.onPeerJoin()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.addToPeerList.bind(this));

    this.socket.roomModule.onReceivingPeerInfo()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.addToPeerList.bind(this));

    this.socket.roomModule.onPeerLeave()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.removeFromPeerList.bind(this));

    this.socket.roomModule.onUsernameAssigned()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.setOwnUsername.bind(this));
  }


  addToPeerList({ username, id }) {
    this.peerList[id] = username;
  }

  initializePeerList(peerList) {
    Object.entries(peerList).forEach(([id, data]) =>
      this.addToPeerList({ username: data['username'], id })
    );
  }

  removeFromPeerList({ id }) {
    if (this.peerList[id]) {
      delete this.peerList[id];
    }
  }

  setOwnUsername({ username }) {
    this.ownUsername = username;
  }


}
