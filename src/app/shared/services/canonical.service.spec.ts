import { TestBed, inject } from '@angular/core/testing';

import { CanonicalService } from './canonical.service';

describe('CanonicalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanonicalService]
    });
  });

  it('should be created', inject([CanonicalService], (service: CanonicalService) => {
    expect(service).toBeTruthy();
  }));
});
