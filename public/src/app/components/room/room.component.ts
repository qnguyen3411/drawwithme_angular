import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Output() queryEmitted = new EventEmitter();
  @Input() roomToShow = {};

  constructor() { }

  ngOnInit() {

  }

  currentlyShowingRoom() {
    return Object.keys(this.roomToShow).length !== 0
  }

  userClicked(user) {
    this.queryEmitted.emit({ user })
  }

  tagClicked(tag) {
    this.queryEmitted.emit({ tag })
  }
}
