import { fetchWeatherApi } from "openmeteo";
import {
  ICurrentWeatherParams,
  IDailyWeatherParams,
  IHourlyWeatherParams,
} from "../type-interfaces/api-param-interfaces";
import {
  ICurrentWeatherResponse,
  IDailyWeatherResponse,
  IHourlyWeatherResponse,
} from "../type-interfaces/api-return-interfaces";

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

export async function fetchHourlyWeather(
  url: string,
  params: IHourlyWeatherParams
): Promise<IHourlyWeatherResponse> {
  const response = await fetchWeatherApi(url, params);
  const data = response[0];
  const hourly = data.hourly()!;
  const utcOffsetSeconds = data.utcOffsetSeconds();

  return {
    hourly: {
      time: [
        ...Array(
          (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()
        ),
      ].map((_, i) =>
        new Date(
          (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
            1000
        ).toISOString()
      ),
      temperature2m: Array.from(hourly.variables(0)!.valuesArray()!),
    },
  };
}

export async function fetchDailyWeather(
  url: string,
  params: IDailyWeatherParams
): Promise<IDailyWeatherResponse> {
  const response = await fetchWeatherApi(url, params);
  const data = response[0];
  const daily = data.daily()!;
  const utcOffsetSeconds = data.utcOffsetSeconds();

  return {
    daily: {
      time: [
        ...Array(
          (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()
        ),
      ].map((_, i) =>
        new Date(
          (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
            1000
        ).toISOString()
      ),
      temperature_2m_max: Array.from(
        daily
          .variables(0)!
          .valuesArray()!
          .map((num) => num)
      ),
      temperature_2m_min: Array.from(
        daily
          .variables(1)!
          .valuesArray()!
          .map((num) => num)
      ),
    },
  };
}
