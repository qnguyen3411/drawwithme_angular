import { Component, OnInit } from '@angular/core';
import { Inject, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-drawchat',
  templateUrl: './drawchat.component.html',
  styleUrls: ['./drawchat.component.css']
})
export class DrawchatComponent implements OnInit, AfterViewInit {
  
  // container: HTMLElement;

  constructor(
    private _route: ActivatedRoute,
    private _sessionService: SessionService,
    @Inject(DOCUMENT) private document,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // this.roomId = params['id'];
  });
  }

  ngAfterViewInit() {
 
  }


}
