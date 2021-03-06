import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
  setUserToken(token) {
    localStorage.setItem('drawwithme_user_token', token);  
  }

  getUserToken() {
    return localStorage.getItem('drawwithme_user_token');
  }

  getTokenHeader() {
    const token = this.getUserToken();
    return { headers: new HttpHeaders().set('Authorization', token) };
  }

  removeUserToken() {
    return localStorage.removeItem('drawwithme_user_token');
  }
}
