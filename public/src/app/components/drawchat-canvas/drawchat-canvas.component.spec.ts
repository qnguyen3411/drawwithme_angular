import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchatCanvasComponent } from './drawchat-canvas.component';

describe('DrawchatCanvasComponent', () => {
  let component: DrawchatCanvasComponent;
  let fixture: ComponentFixture<DrawchatCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchatCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchatCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
