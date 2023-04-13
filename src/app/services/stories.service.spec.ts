import { TestBed } from '@angular/core/testing';

import { StoriesService } from './stories.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('StoriesService', () => {
  let service: StoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });
    service = TestBed.inject(StoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
