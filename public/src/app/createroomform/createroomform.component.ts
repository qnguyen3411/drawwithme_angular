import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DrawchatService } from '../services/drawchat.service';

@Component({
  selector: 'app-createroomform',
  templateUrl: './createroomform.component.html',
  styleUrls: ['./createroomform.component.css']
})
export class CreateRoomFormComponent implements OnInit {

  title: string;
  closeBtnName: string;

  postData = {

  }

  constructor(
    public bsModalRef: BsModalRef,
    private _drawChatService: DrawchatService
    ) {}

  ngOnInit() {
    this.title = "Make a new room!"
  }

  onSubmit(){
    this._drawChatService.createRoom()
  }
}
