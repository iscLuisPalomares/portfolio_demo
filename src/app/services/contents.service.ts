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
}
