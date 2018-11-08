import { TestBed } from '@angular/core/testing';

import { DrawchatCanvasDataCacheService } from './drawchat-canvas-data-cache.service';

describe('DrawchatCanvasDataCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawchatCanvasDataCacheService = TestBed.get(DrawchatCanvasDataCacheService);
    expect(service).toBeTruthy();
  });
});
