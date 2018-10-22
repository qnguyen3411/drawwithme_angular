import { TestBed } from '@angular/core/testing';

import { DrawchatService } from './drawchat.service';

describe('DrawchatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawchatService = TestBed.get(DrawchatService);
    expect(service).toBeTruthy();
  });
});
