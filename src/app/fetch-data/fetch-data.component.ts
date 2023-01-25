import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];
  public tomographies: Tomography[] = [];

  constructor(http: HttpClient, @Inject('BACKEND_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe({
      next: result => {
        this.forecasts = result;
      }, 
      error: error => console.error(error)
    });
    http.get<Tomography[]>(baseUrl + 'tomographies').subscribe({
      next: result => {
        this.tomographies = result;
      },
      error: error => console.error(error)
    })
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


interface Tomography {
  patientname: string;
}