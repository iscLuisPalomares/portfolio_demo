import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private decodedToken: any;
  private isUserAuthenticated: boolean = false;
  private backendUrl: string = "";

  constructor(private http: HttpClient, @Inject('BACKEND_URL') backendurl: string) {
    this.backendUrl = backendurl;
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${this.backendUrl}api/login`, userData, { responseType: "text" }).pipe(map(token => {
      this.isUserAuthenticated = true;
      console.log("token returned:");
      console.log(token);
      return this.saveToken2(token);
    }));
  }

  verifyToken(userToken: any) {
    return this.http.post(`${this.backendUrl}api/verifytoken`, userToken).pipe(map(value => {
      return value;
    }));
  }

  isAuthenticated(): boolean {
    return this.isUserAuthenticated;
  }

  logoutUser(): boolean {
    try {
      localStorage.removeItem('auth_tkn')
      localStorage.removeItem('auth_meta');
      this.isUserAuthenticated = false;
      return true;
    } catch (error: any) {
      console.log("error while deleting keys");
      return false;
    }
  }

  private saveToken(token: any): any {
    console.log(token);
    let parseToken = JSON.parse(token);
    if (parseToken.status == "no valid") { console.log("no valid json token"); return; }
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    //console.log(token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    //console.log(JSON.stringify(this.decodedToken));
    return token;
  }

  private saveToken2(token: any): any {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
  }
}
