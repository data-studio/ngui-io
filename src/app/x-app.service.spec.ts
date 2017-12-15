import { TestBed, inject } from '@angular/core/testing';

import { XAppService } from './x-app.service';

describe('XAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XAppService]
    });
  });

  it('should be created', inject([XAppService], (service: XAppService) => {
    expect(service).toBeTruthy();
  }));
});
