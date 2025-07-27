import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICurrentWeatherState {
  time: Date;
  temperature2m: number;
  precipitation: number;
  rain: number;
  cloudCover: number;
  windSpeed10m: number;
  windDirection10m: number;
  showers: number;
  snowfall: number;
  relativeHumidity2m: number;
}

const initialState: ICurrentWeatherState = {
  time: new Date(),
  temperature2m: 0,
  precipitation: 0,
  rain: 0,
  cloudCover: 0,
  windSpeed10m: 0,
  windDirection10m: 0,
  showers: 0,
  snowfall: 0,
  relativeHumidity2m: 0,
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<ICurrentWeatherState>) => {
      state.time = action.payload.time;
      state.temperature2m = action.payload.temperature2m;
      state.precipitation = action.payload.precipitation;
      state.rain = action.payload.rain;
      state.cloudCover = action.payload.cloudCover;
      state.windDirection10m = action.payload.windDirection10m;
      state.windSpeed10m = action.payload.windSpeed10m;
      state.showers = action.payload.showers;
      state.snowfall = action.payload.snowfall;
      state.relativeHumidity2m = action.payload.relativeHumidity2m;
    },
  },
});

export const { setValues } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
