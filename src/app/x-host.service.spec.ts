import { TestBed, inject } from '@angular/core/testing';

import { XHostService } from './x-host.service';

describe('XHostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XHostService]
    });
  });

  it('should be created', inject([XHostService], (service: XHostService) => {
    expect(service).toBeTruthy();
  }));
});
