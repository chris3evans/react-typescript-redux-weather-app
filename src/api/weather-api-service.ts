import { fetchWeatherApi } from "openmeteo";
import { ICurrentWeatherParams } from "../type-interfaces/api-param-interfaces";
import { ICurrentWeatherResponse } from "../type-interfaces/api-return-interfaces";

const params = {
  latitude: 51.5085,
  longitude: -0.1257,
  hourly: "temperature_2m",
  models: "ukmo_seamless",
};
const url = "https://api.open-meteo.com/v1/forecast";
// const responses = await fetchWeatherApi(url, params);

export async function fetchCurrentWeather(
  url: string,
  params: ICurrentWeatherParams
): Promise<ICurrentWeatherResponse> {
  const response = await fetchWeatherApi(url, params);
  const data = response[0];
  const current = data.current()!;
  const utcOffsetSeconds = data.utcOffsetSeconds();

  return {
    current: {
      time: new Date(
        (Number(current.time()) + utcOffsetSeconds) * 1000
      ).toISOString(),
      temperature2m: current.variables(0)!.value(),
    },
  };
}
