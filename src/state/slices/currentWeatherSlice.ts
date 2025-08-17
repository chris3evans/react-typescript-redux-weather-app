import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrentWeatherResponse } from "../../type-interfaces/api-return-interfaces";

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
    },
  },
});

export const { setValues } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
