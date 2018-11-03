import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


import { LoginFormComponent } from '../loginform/loginform.component';
import { SignupFormComponent } from '../signupform/signupform.component';
import { CreateRoomFormComponent } from '../createroomform/createroomform.component';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {
  currQuery = {};
  roomToShow = {}

  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private _sessionService: SessionService,
    private _router: Router,
  ) { }
  
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
    (this.bsModalRef.content as CreateRoomFormComponent).formDone
      .subscribe(roomId => {
        this._router.navigate(['/draw/' + roomId]);
      })
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  setRoomToShow(room) {
    this.roomToShow = room;
  }
  
  setRoomListQuery(e) {
    this.currQuery = e;
  }

  logout() {
    this._sessionService.removeUserToken();
  }

  isLoggedIn() {
    return this._sessionService.getUserToken() !== null;
  }


}
