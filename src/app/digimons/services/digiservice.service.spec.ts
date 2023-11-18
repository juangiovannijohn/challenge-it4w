import { TestBed } from '@angular/core/testing';

import { DigiserviceService } from './digiservice.service';

describe('DigiserviceService', () => {
  let service: DigiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
