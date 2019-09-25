import { TestBed } from '@angular/core/testing';

import { MotcService } from './motc.service';

describe('MotcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotcService = TestBed.get(MotcService);
    expect(service).toBeTruthy();
  });
});
