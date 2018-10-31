import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchatChatComponent } from './drawchat-chat.component';

describe('DrawchatChatComponent', () => {
  let component: DrawchatChatComponent;
  let fixture: ComponentFixture<DrawchatChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchatChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchatChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
