import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchatDisconnectModalComponent } from './drawchat-disconnect-modal.component';

describe('DrawchatDisconnectModalComponent', () => {
  let component: DrawchatDisconnectModalComponent;
  let fixture: ComponentFixture<DrawchatDisconnectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchatDisconnectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchatDisconnectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
