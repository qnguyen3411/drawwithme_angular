import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DrawchatService } from '../../services/drawchat.service';

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

    this.getQueryObservable(this.query)
      .subscribe(results => {
        if (results['status'] !== "success") { return; }
        this.rooms = results['data'];

        const now = new Date();
        for (let i = 0; i < this.rooms.length; i++) {
          this.rooms[i]['isActive'] = new Date(this.rooms[i]['expires_at']) > now;
        }
        this.rooms.reverse()
      })
  }

  getQueryObservable(query) {
    if (query['user']) {
      return this._drawChatService.fetchRoomsByJoiner(query['user']);
    } else if (query['tag']) {
      return this._drawChatService.fetchRoomsByTag(this.query['tag'])
    }
    return this._drawChatService.fetchRooms();
  }

  onRoomClicked(room) {
    this.roomClicked.emit(room);
  }

}
