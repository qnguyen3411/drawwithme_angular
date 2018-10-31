import { TestBed } from '@angular/core/testing';

import { DrawchatColorService } from './drawchat-color.service';

describe('DrawchatColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawchatColorService = TestBed.get(DrawchatColorService);
    expect(service).toBeTruthy();
  });
});
