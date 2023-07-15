import { TestBed } from '@angular/core/testing';

import { StudserviceService } from './studservice.service';

describe('StudserviceService', () => {
  let service: StudserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
