import { TestBed, inject } from '@angular/core/testing';

import { XVersionService } from './x-version.service';

describe('XVersionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XVersionService]
    });
  });

  it('should be created', inject([XVersionService], (service: XVersionService) => {
    expect(service).toBeTruthy();
  }));
});
