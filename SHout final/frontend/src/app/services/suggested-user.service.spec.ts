import { TestBed } from '@angular/core/testing';

import { SuggestedUserService } from './suggested-user.service';

describe('SuggestedUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuggestedUserService = TestBed.get(SuggestedUserService);
    expect(service).toBeTruthy();
  });
});
