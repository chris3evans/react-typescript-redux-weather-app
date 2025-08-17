import {
  ICurrentWeatherParams,
  IDailyWeatherParams,
  IHourlyWeatherParams,
} from "../type-interfaces/api-param-interfaces";

export const WEATHER_API_URL: string = "https://api.open-meteo.com/v1/forecast";

export const CURRENT_WEATHER_PARAMS: ICurrentWeatherParams = {
  latitude: 51.5085,
  longitude: -0.1257,
  models: "ukmo_seamless",
  current: [
    "temperature_2m",
    "is_day",
    "rain",
    "precipitation",
    "relative_humidity_2m",
    "temperature_2m",
    "showers",
    "snowfall",
    "cloud_cover",
  ],
};

export const HOURLY_WEATHER_PARAMS: IHourlyWeatherParams = {
  latitude: 51.5085,
  longitude: -0.1257,
  hourly: "temperature_2m",
  models: "ukmo_seamless",
};

export const DAILY_WEATHER_PARAMS: IDailyWeatherParams = {
  latitude: 52.52,
  longitude: 13.41,
  daily: ["temperature_2m_max", "temperature_2m_min"],
};
