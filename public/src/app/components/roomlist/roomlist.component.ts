import { Component, OnInit } from '@angular/core';
import { DrawchatService } from '../../services/drawchat.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  constructor(
    private _drawChatService: DrawchatService
  ) { }

  ngOnInit() {
    this._drawChatService.fetchRooms()
      .subscribe(results => {
        console.log(results);
      })
  }

}
