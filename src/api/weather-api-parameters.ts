import { ICurrentWeatherParams } from "../type-interfaces/api-param-interfaces";

export const WEATHER_API_URL: string = "https://api.open-meteo.com/v1/forecast";

export const CURRENT_WEATHER_PARAMS: ICurrentWeatherParams = {
  latitude: 51.5085,
  longitude: -0.1257,
  models: "ukmo_seamless",
  current: ["temperature_2m"],
};
