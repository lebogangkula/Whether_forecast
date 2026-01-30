import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whether-ui',
  imports: [CommonModule],
  templateUrl: './whether-ui.html',
  styleUrl: './whether-ui.scss',
})
export class WhetherUI {
  /**
   *
   */
  dailyWhether: Record<string, any[]> = {};
  currentWhether: any = {};
hourlyWhether: any[] = [];
city: string = "";
date: string = "";
day1: string = "";
day2: string = "";
currTemp: number = 0;
day1Temp: number = 0;
day2Temp: number = 0;
day3Temp: number = 0;
day4Temp: number = 0;
temp1: number = 0;
temp2: number = 0;
temp3: number = 0;
temp4: number = 0;
dateKeys: string[] = [];
currhum: number = 0;


day3: string = "";

day4: string = "";

  constructor() {
  
  }
 async ngOnInit(){
  this.city = "Johannesburg"
  await this.getWeatherData(this.city);
 }
  async getWeatherData(city: string) {
  const apiKey = "20c9e1ff05310fdbe24f0efc00f4783f"; // replace with your weather API key
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather: ${response.statusText}`);
    }

    const data = await response.json();

    // Current weather
    const current = {
      temp: data.list[0].main.temp,
      humidity: data.list[0].main.humidity,
      wind: data.list[0].wind.speed,
      description: data.list[0].weather[0].description,
      icon: data.list[0].weather[0].icon,
    };

    // Hourly forecast (next 6 hours)
    const hourly = data.list.slice(0, 6).map((item: any) => ({
      time: item.dt_txt,
      temp: item.main.temp,
      icon: item.weather[0].icon,
    }));

    // Daily forecast (grouped by day)
    const daily: Record<string, any[]> = {};
    data.list.forEach((item: any) => {
       this.date = item.dt_txt.split(" ")[0];
      if (!daily[this.date]) daily[this.date] = [];
      daily[this.date].push(item);
    });
       this.currentWhether = current;
    this.hourlyWhether = hourly;
    this.dailyWhether = daily;

  this.dateKeys = Object.keys(this.dailyWhether);
this.currhum = Math.round(this.currentWhether.humidity);
this.day1 = new Date(this.dailyWhether[this.dateKeys[0]][0].dt_txt)
  .toLocaleDateString("en-US", { weekday: "short" });
this.day2 = new Date(this.dailyWhether[this.dateKeys[1]][0].dt_txt)
  .toLocaleDateString("en-US", { weekday: "short" });
this.day3 = new Date(this.dailyWhether[this.dateKeys[2]][0].dt_txt)
  .toLocaleDateString("en-US", { weekday: "short" });
this.day4 = new Date(this.dailyWhether[this.dateKeys[3]][0].dt_txt)
  .toLocaleDateString("en-US", { weekday: "short" });

this.day1Temp = Math.round(this.dailyWhether[this.dateKeys[0]][0].main.temp);
this.day2Temp = Math.round(this.dailyWhether[this.dateKeys[1]][0].main.temp);
this.day3Temp = Math.round(this.dailyWhether[this.dateKeys[2]][0].main.temp);
this.day4Temp = Math.round(this.dailyWhether[this.dateKeys[3]][0].main.temp);

this.currTemp = Math.round(this.currentWhether.temp);
this.temp1 = Math.round(this.hourlyWhether[1].temp);
this.temp2 = Math.round(this.hourlyWhether[2].temp);
this.temp3 = Math.round(this.hourlyWhether[3].temp);
this.temp4 = Math.round(this.hourlyWhether[4].temp);


 
    console.log(this.hourlyWhether[0].icon);
    return { current, hourly, daily };
  } catch (error) {
    console.error(error);
    return null;
  }
}

}


