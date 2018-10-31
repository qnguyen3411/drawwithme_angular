import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';

import { SessionService } from '../../services/session.service';
import { SocketsService } from '../../services/sockets.service';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';

@Component({
  selector: 'app-drawchat',
  templateUrl: './drawchat.component.html',
  styleUrls: ['./drawchat.component.css'],
  providers: [DrawchatBrushService]
})
export class DrawchatComponent implements OnInit, OnDestroy {
  // TODO: move zoom to its own service
  zoom = 1;

  destroy: Subject<boolean> = new Subject<boolean>();

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
  }

  ngOnDestroy() {
    this._socket.connectionModule.leaveRoom();
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
 
}
