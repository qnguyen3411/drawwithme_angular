import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrawchatService {

  constructor(
    private _http: HttpClient,
    private _sessionService: SessionService
    ) { }

  createRoom(data) {
    const header = this._sessionService.getTokenHeader();
    return this._http.post('/rooms/create', data, header);
  }

  fetchRooms() {
    return this._http.get('/rooms');
  }

  fetchRoom(id) {

  }

  fetchRoomsByJoiner(joinerId) {
    return this._http.get('/rooms?user=' + joinerId);
  }

  fetchRoomsByTag(tag) {
    return this._http.get('/rooms?tag=' + tag);
  }

  fetchLog(id) {
    return this._http.get(environment.endpoints.logs + `${id}_0.txt`, {responseType: "text"})
      .pipe(map(data => JSON.parse(data + "]")));
  }

  fetchRoomTokenConfig() {
    return this._http.get('/rooms/config');
  }
}
