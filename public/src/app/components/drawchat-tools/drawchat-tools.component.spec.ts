import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchatToolsComponent } from './drawchat-tools.component';

describe('DrawchatToolsComponent', () => {
  let component: DrawchatToolsComponent;
  let fixture: ComponentFixture<DrawchatToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchatToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchatToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
