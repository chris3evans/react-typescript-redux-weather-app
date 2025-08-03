export interface IHourlyWeatherItem {
  time: string;
  icon: string;
  temperature: number;
}

export interface IDailyWeatherItem {
  date: string;
  weekday: string;
  icon: string;
  lowestTemperature: number;
  highestTemperature: number;
  // temperatureRange: ??
}

export interface IWeatherFeature {
  feature: string;
  value: number;
  unit: string;
}
