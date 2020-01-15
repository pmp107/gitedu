import { TestBed } from '@angular/core/testing';

import { ShoutService } from './shout.service';

describe('ShoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoutService = TestBed.get(ShoutService);
    expect(service).toBeTruthy();
  });
});
