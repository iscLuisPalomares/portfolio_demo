import { TestBed } from '@angular/core/testing';

import { DatagridfakeService } from './datagridfake.service';

describe('DatagridfakeService', () => {
  let service: DatagridfakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatagridfakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
