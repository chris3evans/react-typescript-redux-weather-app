export interface ICurrentWeatherResponse {
  current: {
    time: string;
    temperature2m: number;
  };
}

export interface IHourlyWeatherResponse {
  hourly: {
    time: string[];
    temperature2m: number[];
  };
}
