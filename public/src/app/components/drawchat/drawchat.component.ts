import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SessionService } from '../../services/session.service';
import { SocketsService } from '../../services/sockets.service';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';
import { Brush } from 'src/app/draw_modules/brush';

@Component({
  selector: 'app-drawchat',
  templateUrl: './drawchat.component.html',
  styleUrls: ['./drawchat.component.css'],
  providers: [DrawchatBrushService]
})
export class DrawchatComponent implements OnInit, OnDestroy {
  // TODO: PeerList should be a service
  peerList = {};

  // brushSettings = Brush.default;
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

    this.subscribeToRoomEvents();
  }

  ngOnDestroy() {
    this._socket.connectionModule.leaveRoom();
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  subscribeToRoomEvents() {
  }

  // Expects dictionary in form of {id: username}

 
}
