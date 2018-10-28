import { Component, OnInit } from '@angular/core';
import { Inject, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SessionService } from '../../services/session.service';
import { Brush } from 'src/app/draw_modules/brush';


@Component({
  selector: 'app-drawchat',
  templateUrl: './drawchat.component.html',
  styleUrls: ['./drawchat.component.css']
})
export class DrawchatComponent implements OnInit {
  brushSettings = {
    rgba: Brush.default.rgba,
    size: Brush.default.size,
  }

  zoom = 1;

  constructor(
    private _route: ActivatedRoute,
    private _sessionService: SessionService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // this.roomId = params['id'];
  });
  }

  setColor(e) {
    this.brushSettings.rgba[0] = e[0];
    this.brushSettings.rgba[1] = e[1];
    this.brushSettings.rgba[2] = e[2];
     // Clone the object so that change detection triggers
    this.brushSettings = Object.assign({}, this.brushSettings);
  }


}
