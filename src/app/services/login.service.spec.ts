import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

xdescribe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule, HttpClient, HttpHandler, { provide: 'BACKEND_URL', useValue: '' }]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
