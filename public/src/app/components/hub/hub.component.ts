import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../loginform/loginform.component';
import { SignupFormComponent } from '../signupform/signupform.component';
import { CreateRoomFormComponent } from '../createroomform/createroomform.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.css']
})
export class HubComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }


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

}
