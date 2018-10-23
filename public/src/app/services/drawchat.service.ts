import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class DrawchatService {

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
    ) { }

  createRoom(data) {
    console.log("CALLED CREATE ROOM")
    const header = this._sessionService.getTokenHeader();
    return this._http.post('/rooms/create', data, header);
  }
}
