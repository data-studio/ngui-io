import { TestBed, inject } from '@angular/core/testing';

import { XOrgService } from './x-org.service';

describe('XOrgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XOrgService]
    });
  });

  it('should be created', inject([XOrgService], (service: XOrgService) => {
    expect(service).toBeTruthy();
  }));
});
