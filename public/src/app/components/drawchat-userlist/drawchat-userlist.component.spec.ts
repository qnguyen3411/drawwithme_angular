import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawchatUserlistComponent } from './drawchat-userlist.component';

describe('DrawchatUserlistComponent', () => {
  let component: DrawchatUserlistComponent;
  let fixture: ComponentFixture<DrawchatUserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawchatUserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawchatUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
