import { TestBed } from '@angular/core/testing';

import { JwtinterceptorService } from './jwtinterceptor.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('JwtinterceptorService', () => {
  let service: JwtinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });
    service = TestBed.inject(JwtinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
