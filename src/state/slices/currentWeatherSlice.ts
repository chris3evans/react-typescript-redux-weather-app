import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrentWeatherResponse } from "../../type-interfaces/api-return-interfaces";
import {
  totalDegreesToCardinalDirection,
  totalDegreesToNormalisedDegrees,
} from "../../services/utility";
import { WindDirection } from "../../type-interfaces/interfaces";

export interface ICurrentWeatherState {
  time: string;
  apparentTemperature: number;
  isDay: number;
  rain: number;
  precipitation: number;
  relativeHumidity2m: number;
  showers: number;
  snowfall: number;
  temperature2m: number;
  cloudCover: number;
  windSpeed: number;
  windDirection: WindDirection;
  windDirectionDegrees: number;
  windGusts: number;
  surfacePressure: number;
}

const initialState: ICurrentWeatherState = {
  time: "",
  apparentTemperature: 0,
  isDay: 0,
  rain: 0,
  precipitation: 0,
  relativeHumidity2m: 0,
  showers: 0,
  snowfall: 0,
  temperature2m: 0,
  cloudCover: 0,
  windSpeed: 0,
  windDirection: { direction: "", directionCapitalised: "" },
  windDirectionDegrees: 0,
  windGusts: 0,
  surfacePressure: 0,
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<ICurrentWeatherResponse>) => {
      state.time = action.payload.current.time;
      state.apparentTemperature = action.payload.current.apparent_temperature;
      state.isDay = action.payload.current.is_day;
      state.rain = action.payload.current.rain;
      state.precipitation = action.payload.current.precipitation;
      state.relativeHumidity2m = action.payload.current.relative_humidity_2m;
      state.showers = action.payload.current.showers;
      state.snowfall = action.payload.current.snowfall;
      state.temperature2m = action.payload.current.temperature_2m;
      state.cloudCover = action.payload.current.cloud_cover;
      state.windSpeed = Number(
        action.payload.current.wind_speed_10m.toFixed(2)
      );
      state.windDirection = totalDegreesToCardinalDirection(
        action.payload.current.wind_direction_10m
      );
      state.windDirectionDegrees = totalDegreesToNormalisedDegrees(
        action.payload.current.wind_direction_10m
      );
      state.windGusts = action.payload.current.wind_gusts_10m;
      state.surfacePressure = action.payload.current.surface_pressure;
    },
  },
});

export const { setValues } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
