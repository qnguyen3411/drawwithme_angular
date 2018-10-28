import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchatSlidersComponent } from './drawchat-sliders.component';

describe('DrawchatSlidersComponent', () => {
  let component: DrawchatSlidersComponent;
  let fixture: ComponentFixture<DrawchatSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchatSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchatSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
