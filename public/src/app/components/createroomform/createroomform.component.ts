import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DrawchatService } from '../../services/drawchat.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createroomform',
  templateUrl: './createroomform.component.html',
  styleUrls: ['./createroomform.component.css']
})
export class CreateRoomFormComponent implements OnInit {
  @Output() formDone = new EventEmitter();
  title: string;
  closeBtnName: string;

  postData = {
    name: "",
    description: "",
    tags: ["test", "uhh", "test"]
  }

  tagStr = "";

  constructor(
    public bsModalRef: BsModalRef,
    private _drawChatService: DrawchatService,
    private _sessionService: SessionService,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log("OK")
    this.title = "Make a new room!"
  }


  onSubmit() {
    this.tagStr = this.tagStr.replace(/[^a-zA-Z0-9\ ]/g, "");
    this.postData.tags = this.tagStr.split(" ");
    this._drawChatService
      .createRoom(this.postData)
      .subscribe(response => {
        console.log(response);
        if (response['status'] === 'success') {
          console.log("RECEIVED ROOM ID", response['data'])
          this.formDone.emit(response['data']);
          this.bsModalRef.hide();
        }
      })
  }
}
