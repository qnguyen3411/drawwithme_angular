import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
// COMPONENTS
import { RoomComponent } from './components/room/room.component';
import { RoomlistComponent } from './components/roomlist/roomlist.component';
import { LoginFormComponent } from './components/loginform/loginform.component';
import { SignupFormComponent } from './components/signupform/signupform.component';
import { CreateRoomFormComponent } from './components/createroomform/createroomform.component';
import { HubComponent } from './components/hub/hub.component';
import { PlaybackComponent } from './components/playback/playback.component';

import { DrawchatComponent } from './components/drawchat/drawchat.component';
import { DrawchatCanvasComponent } from './components/drawchat-canvas/drawchat-canvas.component';
import { DrawchatSlidersComponent } from './components/drawchat-sliders/drawchat-sliders.component';
import { DrawchatPaletteComponent } from './components/drawchat-palette/drawchat-palette.component';
import { DrawchatTimerComponent } from './components/drawchat-timer/drawchat-timer.component';
import { DrawchatToolsComponent } from './components/drawchat-tools/drawchat-tools.component';
import { DrawchatUserlistComponent } from './components/drawchat-userlist/drawchat-userlist.component';
import { DrawchatChatComponent } from './components/drawchat-chat/drawchat-chat.component';
import { DrawchatDisconnectModalComponent } from './components/drawchat-disconnect-modal/drawchat-disconnect-modal.component';

// SERVICES
import { UserService } from './services/user.service';
import { DrawchatService } from './services/drawchat.service';
import { SessionService } from './services/session.service';
import { SocketsService } from './services/sockets.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomlistComponent,
    LoginFormComponent,
    SignupFormComponent,
    CreateRoomFormComponent,
    DrawchatComponent,
    HubComponent,
    PlaybackComponent,
    DrawchatCanvasComponent,
    DrawchatSlidersComponent,
    DrawchatPaletteComponent,
    DrawchatTimerComponent,
    DrawchatUserlistComponent,
    DrawchatChatComponent,
    DrawchatDisconnectModalComponent,
    DrawchatToolsComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [
    LoginFormComponent,
    SignupFormComponent,
    CreateRoomFormComponent,
    DrawchatDisconnectModalComponent
  ],
  providers: [
    UserService,
    DrawchatService,
    SessionService,
    SocketsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
