import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DrawchatDisconnectModalComponent } from '../drawchat-disconnect-modal/drawchat-disconnect-modal.component';
import { Router } from '@angular/router';

import { SocketsService } from '../../services/sockets.service';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';

@Component({
  selector: 'app-drawchat',
  templateUrl: './drawchat.component.html',
  styleUrls: ['./drawchat.component.css'],
  providers: [DrawchatBrushService]
})
export class DrawchatComponent implements OnInit, OnDestroy {
  zoom = 1;

  destroy: Subject<boolean> = new Subject<boolean>();

  bsModalRef: BsModalRef;
  currRoom;

  constructor(
    private _route: ActivatedRoute,
    private _socket: SocketsService,
    private modalService: BsModalService,
    private _router: Router,

  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      const roomId = params['id'];
      this.currRoom = roomId;
      this._socket.connectionModule.joinRoom(roomId);
    });

    this._socket.connectionModule.onForceDisconnect()
      .subscribe(this.showDisconnectModal.bind(this))

  }

  showDisconnectModal() {
    this.bsModalRef = this.modalService.show(DrawchatDisconnectModalComponent);
    (this.bsModalRef.content as DrawchatDisconnectModalComponent).formDone
      .subscribe(() => {
        this._router.navigate(['/']);
        this.bsModalRef.hide();
      })
  }

  ngOnDestroy() {
    this._socket.connectionModule.leaveRoom();
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

}
