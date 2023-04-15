import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { getBackEndUrl } from 'src/main';

xdescribe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClientModule, HttpClient, HttpHandler, { provide: 'BACKEND_URL', useValue: '' }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
