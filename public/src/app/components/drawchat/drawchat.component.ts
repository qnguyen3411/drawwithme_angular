import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// import 'rxjs/add/operator/takeUntil';


import { SessionService } from '../../services/session.service';
import { SocketsService } from '../../services/sockets.service';
import { Brush } from 'src/app/draw_modules/brush';


@Component({
  selector: 'app-drawchat',
  templateUrl: './drawchat.component.html',
  styleUrls: ['./drawchat.component.css']
})
export class DrawchatComponent implements OnInit, OnDestroy {

  peerList = {};

  brushSettings = Brush.default;
  zoom = 1;

  destroy: Subject<boolean> = new Subject<boolean>();
  peerAdded: Subject<any> = new Subject<any>();

  constructor(
    private _route: ActivatedRoute,
    private _sessionService: SessionService,
    private _socket: SocketsService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      const roomId = params['id'];
      this._socket.connectionModule.joinRoom(roomId);
    });
    
    this.listenToRoomEvents();
  }

  ngOnDestroy() {
    this._socket.connectionModule.leaveRoom();
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  setColor(e) {
    this.brushSettings.rgba[0] = e[0];
    this.brushSettings.rgba[1] = e[1];
    this.brushSettings.rgba[2] = e[2];
     // Clone the object so that change detection triggers
    this.brushSettings = Object.assign({}, this.brushSettings);
  }

  listenToRoomEvents() {
    this._socket.roomModule.onPeerJoin()
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe(data => {
        this.addToPeerList(data['id'], data['username']);
      })
  }

  addToPeerList(id, username) {

    this.peerList[id] = { username };
    this.peerAdded.next({ id, username })
  }



}
