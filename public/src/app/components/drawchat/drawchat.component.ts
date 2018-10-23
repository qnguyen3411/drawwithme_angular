import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Inject, AfterViewInit, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-drawchat',
  templateUrl: './drawchat.component.html',
  styleUrls: ['./drawchat.component.css']
})
export class DrawchatComponent implements OnInit, AfterViewInit {
  token =  "";
  constructor(
    private _sessionService: SessionService,
    @Inject(DOCUMENT) private document,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.token = this._sessionService.getRoomJoinToken();
  }

  ngAfterViewInit() {
    const socketScript = this.document.createElement('script');
    socketScript.type = 'text/javascript';
    socketScript.src = 'http://localhost:5000/socket.io/socket.io.js';

    this.elementRef.nativeElement.appendChild(socketScript);

    const drawScript = this.document.createElement('script');
    drawScript.type = 'text/javascript';
    drawScript.src = 'http://localhost:5000/drawchat.js';
    this.elementRef.nativeElement.appendChild(drawScript);

  }

  afterScriptAdded() {
    const params= {
      width: '350px',
      height: '420px',
    };
    if (typeof (window['functionFromExternalScript']) === 'function') {
      window['functionFromExternalScript'](params);
    }
  }

}
