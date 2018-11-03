import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-drawchat-disconnect-modal',
  templateUrl: './drawchat-disconnect-modal.component.html',
  styleUrls: ['./drawchat-disconnect-modal.component.css']
})
export class DrawchatDisconnectModalComponent implements OnInit {

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
  ) { }

  ngOnInit() {
    this.title = "Make a new room!"
  }


  onSubmit() {
   this.formDone.emit(true);
  }
}
