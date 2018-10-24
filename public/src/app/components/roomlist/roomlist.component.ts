import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DrawchatService } from '../../services/drawchat.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  rooms = [];
  @Output() roomClicked = new EventEmitter();

  constructor(
    private _drawChatService: DrawchatService
  ) { }

  ngOnInit() {
    this._drawChatService.fetchRooms()
      .subscribe(results => {
        if (results['status'] !== "success") { return; }
        this.rooms = results['data'];
        console.log(this.rooms);
      })
  }

  onRoomClicked(room) {
    this.roomClicked.emit(room);
  }

}
