import { Injectable } from '@angular/core';
import { HttpClient, HttpClient as http } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {
  options: String[] = [
    'Novel',
    'Music',
    'Story',
    'Videogame',
    'Software',
    'Hardware',
    'Speaker',
    'Other'
  ];
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
   }

  allCategories() {
    return this.options;
  }

  getListOfDatabases(baseUrl: string): Observable<string[]> {
    return this.http.get<string[]>(`${baseUrl}mongo/databases`).pipe(map((res) => {
      return res;
    }), catchError(err => { 
      return of(["error"]); 
    }));
  }

  getListOfCollections(baseUrl: string, dbselected: string): Observable<string[]> {
    return this.http.post<string[]>(`${baseUrl}mongo/getcollections`, { "database": dbselected }).pipe(map((res) => {
      return res;
    }), catchError(err => { 
      return of(["error"]); 
    }));
  }

  postInvitesConfimation(invitescode: string, isComing: boolean, howmany: number): Observable<any> {
    let awsurl = "https://data.nahuiyluisboda.com.mx";
    let localurl = "http://localhost:3000";
    return this.http.post<string[]>(`${awsurl}/setinvite`, {"code": invitescode, "iscoming": isComing, "howmany": howmany}).pipe(map((res) => {
      return res;
    }), catchError(err => { 
      return of(["error"]);
    }));
  }

  getInvitesConfimation(): Observable<string[]> {
    let awsurl = "https://data.nahuiyluisboda.com.mx";
    let localurl = "http://localhost:3000";
    return this.http.get<string[]>(`${awsurl}/getinvited`).pipe(map((res) => {
      return res;
    }), catchError(err => { 
      return of(["error"]); 
    }));
  }
  getInvitesByCode(code: string): Observable<any> {
    let awsurl = "https://data.nahuiyluisboda.com.mx";
    let localurl = "http://localhost:3000";
    return this.http.post<string[]>(`${awsurl}/getinvitedbycode`, {"invitescode": code}).pipe(map((res) => {
      return res;
    }), catchError(err => { 
      return of(["error"]); 
    }));
  }
}
