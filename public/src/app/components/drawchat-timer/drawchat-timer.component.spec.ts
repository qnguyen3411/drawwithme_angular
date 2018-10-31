import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchatTimerComponent } from './drawchat-timer.component';

describe('DrawchatTimerComponent', () => {
  let component: DrawchatTimerComponent;
  let fixture: ComponentFixture<DrawchatTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchatTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchatTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
