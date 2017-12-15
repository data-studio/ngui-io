import { TestBed, inject } from '@angular/core/testing';

import { XApiService } from './x-api.service';

describe('XApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XApiService]
    });
  });

  it('should be created', inject([XApiService], (service: XApiService) => {
    expect(service).toBeTruthy();
  }));
});
