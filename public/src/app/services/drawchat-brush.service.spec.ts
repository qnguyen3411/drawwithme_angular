import { TestBed } from '@angular/core/testing';

import { DrawchatBrushService } from './drawchat-brush.service';

describe('DrawchatBrushService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawchatBrushService = TestBed.get(DrawchatBrushService);
    expect(service).toBeTruthy();
  });
});
