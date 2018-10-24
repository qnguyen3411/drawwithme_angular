import { Component, OnInit } from '@angular/core';
import { Inject, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { KeepHtmlPipe } from '../../pipes/keep-html.pipe';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-drawchat',
  templateUrl: './drawchat.component.html',
  styleUrls: ['./drawchat.component.css']
})
export class DrawchatComponent implements OnInit, AfterViewInit {
  token =  "";
  roomId = "";
  constructor(
    private _route: ActivatedRoute,
    private _sessionService: SessionService,
    @Inject(DOCUMENT) private document,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.roomId = params['id'];
  });
    this.token = this._sessionService.getUserToken();
  }

  ngAfterViewInit() {
    const socketScript = this.document.createElement('script');
    socketScript.type = 'text/javascript';
    socketScript.src = 'http://localhost:5000/socket.io/socket.io.js';
    this.elementRef.nativeElement.appendChild(socketScript);
    
    socketScript.onload = () => {
      const drawScript = this.document.createElement('script');
      drawScript.type = 'text/javascript';
      drawScript.src = 'http://localhost:5000/drawchat.js';
      this.elementRef.nativeElement.appendChild(drawScript);
    }
  }


}
