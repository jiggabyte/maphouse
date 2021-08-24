import { TestBed } from '@angular/core/testing';

import { SytemapjsService } from './sytemapjs.service';

describe('SytemapjsService', () => {
  let service: SytemapjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SytemapjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
