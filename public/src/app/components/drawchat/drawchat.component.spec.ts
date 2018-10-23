import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchatComponent } from './drawchat.component';

describe('DrawchatComponent', () => {
  let component: DrawchatComponent;
  let fixture: ComponentFixture<DrawchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
