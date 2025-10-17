import {
  ICurrentWeatherParams,
  IDailyWeatherParams,
  IHourlyWeatherParams,
} from "../type-interfaces/api-param-interfaces";

export const WEATHER_API_URL: string = "https://api.open-meteo.com/v1/forecast";

export const current_weather_params = (
  latitude: number,
  longitude: number
): ICurrentWeatherParams => ({
  latitude,
  longitude,
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
    "wind_speed_10m",
    "surface_pressure",
    "wind_direction_10m",
    "wind_gusts_10m",
  ],
});

export const hourly_weather_params = (
  latitude: number,
  longitude: number
): IHourlyWeatherParams => ({
  latitude,
  longitude,
  hourly: ["weather_code", "temperature_2m", "surface_pressure"],
  models: "ukmo_seamless",
});

export const daily_weather_params = (
  latitude: number,
  longitude: number
): IDailyWeatherParams => ({
  latitude,
  longitude,
  daily: [
    "temperature_2m_max",
    "temperature_2m_min",
    "weather_code",
    "rain_sum",
  ],
});
