import { TestBed } from '@angular/core/testing';

import { LiffService } from './liff.service';

describe('LiffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiffService = TestBed.get(LiffService);
    expect(service).toBeTruthy();
  });
});
