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

export interface IDailyWeatherResponse {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}
