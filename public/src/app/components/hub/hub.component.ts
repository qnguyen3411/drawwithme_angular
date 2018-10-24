import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginFormComponent } from '../loginform/loginform.component';
import { SignupFormComponent } from '../signupform/signupform.component';
import { CreateRoomFormComponent } from '../createroomform/createroomform.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {
  currQuery = {};
  isLoggedIn = this._sessionService.getUserToken() !== null;
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private _sessionService: SessionService
    ) { }
  roomToShow = {}
  

  ngOnInit() {
  }

  showLoginForm() {
    this.bsModalRef = this.modalService.show(LoginFormComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  showSignupForm() {
    this.bsModalRef = this.modalService.show(SignupFormComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  showCreateRoomForm() {
    this.bsModalRef = this.modalService.show(CreateRoomFormComponent);

    this.bsModalRef.content.closeBtnName = 'Close';
  }

  setRoomToShow(room) {
    this.roomToShow = room;
  }

  logOutClicked() {
    this._sessionService.removeUserToken();
    this.isLoggedIn = false;
  }

  queryRoomList(e) {
    this.currQuery = e;
  }


}
