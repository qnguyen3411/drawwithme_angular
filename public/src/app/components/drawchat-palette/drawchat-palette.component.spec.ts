import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchatPaletteComponent } from './drawchat-palette.component';

describe('DrawchatPaletteComponent', () => {
  let component: DrawchatPaletteComponent;
  let fixture: ComponentFixture<DrawchatPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchatPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchatPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
