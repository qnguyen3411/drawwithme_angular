import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrawchatService {

  constructor(private _http: HttpClient) { }

  createRoom() {
    console.log("CALLED CREATE ROOM")
  }
}
