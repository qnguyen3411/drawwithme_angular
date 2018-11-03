import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SocketsService } from '../../services/sockets.service';

@Component({
  selector: 'app-drawchat-chat',
  templateUrl: './drawchat-chat.component.html',
  styleUrls: ['./drawchat-chat.component.css']
})
export class DrawchatChatComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('chatBox') private chatBox: ElementRef;
  chatBoxElem: HTMLElement;


  peerList = {}
  chatLog: Array<{ username: string, time: Date, message: string }> = [];
  currInput: string;

  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private socket: SocketsService) { }

  ngOnInit() {
    this.subscribeToRoomEvents();
    this.subscribeToChatEvents();
  }

  ngAfterViewInit() {
    this.chatBoxElem = this.chatBox.nativeElement;
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  subscribeToRoomEvents() {
    this.socket.roomModule.onPeerJoin()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.addToPeerList.bind(this));

    this.socket.roomModule.onReceivingPeerInfo()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.addToPeerList.bind(this));

    this.socket.roomModule.onPeerLeave()
      .pipe(takeUntil(this.destroy))
      .subscribe(this.removeFromPeerList.bind(this));
  }

  addToPeerList({ username, id }) {
    this.peerList[id] = username;
  }

  removeFromPeerList({ id }) {
    if (this.peerList[id]) {
      delete this.peerList[id];
    }
  }

  subscribeToChatEvents() {
    this.socket.chatModule.onNewMessage()
      .pipe(
        map(this.formatMessage.bind(this))
      )
      .subscribe(this.appendMessageToChatlog.bind(this));
  }

  formatMessage({ id, data }) {
    if (!this.peerList[id]) { return };
    const username = this.peerList[id];
    return {
      username,
      time: new Date(),
      message: data
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.appendOwnMessage();
      this.sendMessage();
      this.currInput = "";
    }
  }

  sendMessage() {
    this.socket.chatModule.emitNewMessage(this.currInput);
  }

  appendOwnMessage() {
    this.appendMessageToChatlog(
      { username: "You", time: new Date(), message: this.currInput })
  }

  appendMessageToChatlog(data: { username: string, time: Date, message: string }) {
    this.chatLog.push(data);
    if (this.chatLog.length >= 30) {
      this.chatLog.shift()
    }
  }

}
