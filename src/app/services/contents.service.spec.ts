import { TestBed } from '@angular/core/testing';

import { ContentsService } from './contents.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ContentsService', () => {
  let service: ContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });
    service = TestBed.inject(ContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
