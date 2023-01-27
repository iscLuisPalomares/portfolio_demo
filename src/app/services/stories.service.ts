import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  // http: HttpClient;
  // baseUrl: String;

  dataArray: any = [
    { id: 1, date: new Date('2023-01-22'), description: 'Added weather api request', notes: 'Enter city name then click button' },
    { id: 2, date: new Date('2023-01-23'), description: 'Added map with amcharts', notes: 'Home view shows a global map' },
    { id: 3, date: new Date('2023-01-24'), description: 'Added bullets to amcharts map', notes: 'Bullets animated with two properties' },
    { id: 4, date: new Date('2023-01-26'), description: 'Working on refresh issue', notes: 'On local refreshing has no problem, on host wont refresh properly' },
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