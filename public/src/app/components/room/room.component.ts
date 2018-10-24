import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() roomToShow = {};

  constructor() { }

  ngOnInit() {

  }

  currentlyShowingRoom() {
    
    return Object.keys(this.roomToShow).length !== 0
  }
}
