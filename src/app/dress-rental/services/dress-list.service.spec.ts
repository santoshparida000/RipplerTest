import { TestBed } from '@angular/core/testing';

import { DressListService } from './dress-list.service';

describe('DressListService', () => {
  let service: DressListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DressListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
