import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';

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

  setRoomJoinToken(token) {
    sessionStorage.setItem('drawwithme_room_token', token);
  }

  getRoomJoinToken() {
    return sessionStorage.getItem('drawwithme_room_token');
  }

  getTokenHeader() {
    const token = this.getUserToken();
    return { headers: new HttpHeaders().set('Authorization', token) };
  }

  // setToken() {
  //   createTokenForExternalReference
  // }
}
