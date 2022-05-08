import { TestBed, inject } from '@angular/core/testing';

import { TextResourcesService } from './text-resources.service';

describe('TextResourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextResourcesService]
    });
  });

  it('should be created', inject([TextResourcesService], (service: TextResourcesService) => {
    expect(service).toBeTruthy();
  }));
});
