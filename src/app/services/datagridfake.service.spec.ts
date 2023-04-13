import { TestBed } from '@angular/core/testing';

import { DatagridfakeService } from './datagridfake.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DatagridfakeService', () => {
  let service: DatagridfakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });
    service = TestBed.inject(DatagridfakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
