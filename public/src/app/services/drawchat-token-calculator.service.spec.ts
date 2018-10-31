import { TestBed } from '@angular/core/testing';

import { DrawchatTokenCalculatorService } from './drawchat-token-calculator.service';

describe('DrawchatTokenCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawchatTokenCalculatorService = TestBed.get(DrawchatTokenCalculatorService);
    expect(service).toBeTruthy();
  });
});
