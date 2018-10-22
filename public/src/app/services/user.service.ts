import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient){}

  signUp(data) {
    return this._http.post('/users/signup', data);
  }

  signIn(data) {
    return this._http.post('/users/signin', data);
  }
  
}
