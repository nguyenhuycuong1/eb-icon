import { TestBed } from '@angular/core/testing';

import { EbIconService } from './eb-icon.service';

describe('EbIconService', () => {
  let service: EbIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
