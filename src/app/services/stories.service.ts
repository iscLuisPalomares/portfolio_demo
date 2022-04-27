import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  // http: HttpClient;
  // baseUrl: String;

  dataArray: any = [
    { id: 1, language: 'c#', country: 'USA', date: new Date('2002-08-01') },
    { id: 2, language: 'c', country: 'MEX', date: new Date('2013-09-01') },
    { id: 3, language: 'python', country: 'CHN', date: new Date('1998-01-24') },
    { id: 4, language: 'java', country: 'RUS', date: new Date('2020-02-01') },
    { id: 5, language: 'js', country: 'UKR', date: new Date('2014-09-01') },
  ];
  
  // constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  constructor() {
    // this.http = http;
    // this.baseUrl = baseUrl;
   }

  getStories() {
    return this.dataArray;
    // this.http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast').subscribe(result => {
    //   // this.dataArray = result;
    //   // return this.dataArray;
    //   return result;
    // }, error => console.error(error));
  }
}


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}