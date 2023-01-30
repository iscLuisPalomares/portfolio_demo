import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];
  public databases: Tomography[] = [];
  public selectedCity: String = "";
  public selectedCityWeather: String = "";
  public selectedCityLocation: String = "";
  public selectedCityTemp: number = 0;
  public selectedCityTempC: number = 0;

  constructor(http: HttpClient, @Inject('BACKEND_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe({
      next: result => {
        this.forecasts = result;
      }, 
      error: error => console.error(error)
    });
    http.get<Tomography[]>(baseUrl + 'tomographies').subscribe({
      next: result => {
        this.databases = result;
      },
      error: error => console.error(error)
    });
  }

  async retrieveWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.selectedCity + '&appid=f8638896bac49542c453874039ec6416&units=imperial');
    const data = await response.json();
    console.log(data);
    if (data.cod !== 200) { alert(data.message); return; }
    //console.log(data['weather'][0].main + ' ' + data['sys']['country']);
    this.selectedCityWeather = data['weather'][0].main;
    this.selectedCityLocation = data['sys']['country'];
    this.selectedCityTemp = data['main']['temp'];
    this.selectedCityTempC = (data['main']['temp'] - 32) * 5 / 9;
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