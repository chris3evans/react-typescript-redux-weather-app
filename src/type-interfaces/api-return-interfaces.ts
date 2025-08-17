export interface ICurrentWeatherResponse {
  current: {
    time: string;
    apparent_temperature: number;
    is_day: number;
    rain: number;
    precipitation: number;
    relative_humidity_2m: number;
    showers: number;
    snowfall: number;
    temperature_2m: number;
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
