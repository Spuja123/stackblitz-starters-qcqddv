import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  weatherData: any;
  constructor() {}
  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    // fetch(
    //   'http://api.weatherstack.com/current?access_key=b1d12c6fab5ddafb7bbc2e7551b17190&query=London'
    // ).then(response => response.json())
    // .then((val) => this.setWeatherData(val));
    let val = {
      request: {
        type: 'City',
        query: 'London, United Kingdom',
        language: 'en',
        unit: 'm',
      },
      location: {
        name: 'London',
        country: 'United Kingdom',
        region: 'City of London, Greater London',
        lat: '51.517',
        lon: '-0.106',
        timezone_id: 'Europe/London',
        localtime: '2023-09-14 12:17',
        localtime_epoch: 1694693820,
        utc_offset: '1.0',
      },
      current: {
        observation_time: '11:17 AM',
        temperature: 21,
        weather_code: 116,
        weather_icons: [
          'https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png',
        ],
        weather_descriptions: ['Partly cloudy'],
        wind_speed: 11,
        wind_degree: 240,
        wind_dir: 'WSW',
        pressure: 1021,
        precip: 0,
        humidity: 53,
        cloudcover: 25,
        feelslike: 21,
        uv_index: 6,
        visibility: 10,
        is_day: 'yes',
      },
    };
    this.setWeatherData(val);
  }
  setWeatherData(data: any) {
    this.weatherData = data;
    console.log(data);
    let currentDate = new Date();
    this.weatherData.isDay = this.weatherData.current.is_day == 'yes';
    this.weatherData.temp_celcius =
      this.weatherData.current.temperature.toFixed(0);
    this.weatherData.temp_feels_like =
      this.weatherData.current.feelslike.toFixed(0);
    console.log(this.weatherData);
  }
}
