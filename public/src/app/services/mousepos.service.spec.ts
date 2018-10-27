import { TestBed } from '@angular/core/testing';

import { MouseposService } from './mousepos.service';

describe('MouseposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MouseposService = TestBed.get(MouseposService);
    expect(service).toBeTruthy();
  });
});
