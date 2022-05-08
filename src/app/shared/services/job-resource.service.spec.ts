import { TestBed, inject } from '@angular/core/testing';

import { JobResourceService } from './job-resource.service';

describe('JobResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobResourceService]
    });
  });

  it('should be created', inject([JobResourceService], (service: JobResourceService) => {
    expect(service).toBeTruthy();
  }));
});
