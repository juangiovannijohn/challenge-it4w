import { TestBed } from '@angular/core/testing';

import { AgifyService } from './agify.service';

describe('AgifyService', () => {
  let service: AgifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
