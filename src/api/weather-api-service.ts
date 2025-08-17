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
import { IReverseGeolocationResponse } from "../type-interfaces/server-interfaces";

const REVERSE_GEOLOCATION_KEY: string = "580e65814a20479180aeff885e10da41";

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
      apparent_temperature: current.variables(0)!.value(),
      is_day: current.variables(1)!.value(),
      rain: current.variables(2)!.value(),
      precipitation: current.variables(3)!.value(),
      relative_humidity_2m: current.variables(4)!.value(),
      temperature_2m: current.variables(5)!.value(),
      showers: current.variables(6)!.value(),
      snowfall: current.variables(7)!.value(),
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

export async function fetchReverseGeoLocation(coords: {
  latitude: number;
  longitude: number;
}): Promise<IReverseGeolocationResponse> {
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude}%2C+${coords.longitude}&key=${REVERSE_GEOLOCATION_KEY}`
  );
  return await response.json();
}
