import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DrawchatService } from '../../services/drawchat.service';
import { query } from '@angular/core/src/render3/query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit, OnChanges {
  rooms = [];
  @Input() query = {};
  @Output() roomClicked = new EventEmitter();

  constructor(
    private _drawChatService: DrawchatService
  ) { }

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges) {
    let obs = this._drawChatService.fetchRooms()
    if (this.query['user']) {
      obs = this._drawChatService.fetchRoomsByJoiner(this.query['user'])
    } else if (this.query['tag']) {
      obs = this._drawChatService.fetchRoomsByTag(this.query['tag'])
    }
    obs.subscribe(results => {
      if (results['status'] !== "success") { return; }
      this.rooms = results['data'];
    })
  }

  onRoomClicked(room) {
    this.roomClicked.emit(room);
  }

  handleQuery(e) {
    console.log("DID IT BOY WE AT ROOM LIST")
  }
}
