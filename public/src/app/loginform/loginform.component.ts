import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent implements OnInit {
  title: string;
  closeBtnName: string;
  postData = {
    username: "",
    password: ""
  }

  constructor(
    public bsModalRef: BsModalRef,
    private _userService: UserService) {}

  ngOnInit() {
    this.title = "Login"
  }

  onSubmit() {
    console.log("CLICKED ONSUBMIT")
    this._userService
      .signIn(this.postData)
      .subscribe(response => {
        console.log(response)
      })
  }

}
