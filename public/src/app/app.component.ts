import { Component, TemplateRef } from '@angular/core';
import { LoginFormComponent } from './components/loginform/loginform.component';
import { SignupFormComponent } from './components/signupform/signupform.component';
import { CreateRoomFormComponent } from './components/createroomform/createroomform.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

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
