export interface IHourlyWeatherItem {
  time: string;
  icon: string;
  temperature: number;
}

export interface IDailyWeatherItem {
  date: string;
  weekday: string;
  // | "monday"
  // | "tuesday"
  // | "wednesday"
  // | "thursday"
  // | "friday"
  // | "saturday"
  // | "sunday";
  icon: string;
  lowestTemperature: number;
  highestTemperature: number;
  // temperatureRange: ??
}
