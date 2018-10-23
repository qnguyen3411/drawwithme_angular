import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DrawchatService } from '../../services/drawchat.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-createroomform',
  templateUrl: './createroomform.component.html',
  styleUrls: ['./createroomform.component.css']
})
export class CreateRoomFormComponent implements OnInit {

  title: string;
  closeBtnName: string;

  postData = {
    name: "",
    tags: ["test", "uhh", "test"]
  }

  constructor(
    public bsModalRef: BsModalRef,
    private _drawChatService: DrawchatService,
    private _sessionService: SessionService
    ) {}

  ngOnInit() {
    this.title = "Make a new room!"
  }

  onSubmit(){
    this._drawChatService
      .createRoom(this.postData)
      .subscribe(response => {
        if (response['status'] === 'success') {
          this._sessionService.setRoomJoinToken(response['token']);
        }
     })
  }
}
