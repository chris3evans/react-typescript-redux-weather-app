export interface ICurrentWeatherParams {
  latitude: number;
  longitude: number;
  models: string;
  current: string[];
}

export interface IHourlyWeatherParams {
  latitude: number;
  longitude: number;
  models: string;
  hourly: string;
}
