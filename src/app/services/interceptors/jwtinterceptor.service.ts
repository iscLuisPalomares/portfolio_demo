import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let storedToken = localStorage.getItem('auth_tkn');
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: "Bearer " + storedToken
      }
    });
    return next.handle(jwtToken);
  }
}
