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

// SERVICES
import { UserService } from './services/user.service';
import { DrawchatService } from './services/drawchat.service';
import { SessionService } from './services/session.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomlistComponent,
    LoginFormComponent,
    SignupFormComponent,
    CreateRoomFormComponent
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
    CreateRoomFormComponent
  ],
  providers: [
    UserService,
    DrawchatService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
