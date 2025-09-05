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
    cloud_cover: number;
    wind_speed_10m: number;
    surface_pressure: number;
  };
}

export interface IHourlyWeatherResponse {
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
}

export interface IDailyWeatherResponse {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    rain_sum: number[];
  };
}
