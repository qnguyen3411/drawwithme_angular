import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupFormComponent implements OnInit {

  title: string;
  closeBtnName: string;
  postData = {
    username: "",
    password: "",
    confirm: ""
  }

  constructor(
    public bsModalRef: BsModalRef,
    private _userService: UserService,
    private _sessionService: SessionService) { }

  ngOnInit() {
    this.title = "Sign up"
  }

  confirmMatch() {
    const { password, confirm } = this.postData;
    return password && password === confirm;
  }

  onSubmit() {
    const { username, password } = this.postData;
    this._userService
      .signUp({ username, password })
      .subscribe(response => {
        const token = response['token'];
        this._sessionService.setUserToken(token);
        this.bsModalRef.hide();
      })
  }
}
