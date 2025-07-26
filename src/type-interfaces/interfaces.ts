export interface IHourlyWeatherItem {
  time: string;
  icon: string;
  temperature: number;
}

export interface IDailyWeatherItem {
  date: string;
  weekday:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";
  icon: string;
  lowestTemperature: number;
  highestTemperature: number;
  // temperatureRange: ??
}

export interface ICurrentWeather {
  time: Date;
  temperature2m: number;
  precipitation: number;
  rain: number;
  cloudCover: number;
  windSpeed10m: number;
  windDirection10m: number;
  showers: number;
  snowfall: number;
  realtiveHumidity2m: number;
}
