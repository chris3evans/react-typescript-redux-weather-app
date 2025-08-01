import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHourlyWeatherItem } from "../../type-interfaces/interfaces";

export interface IHourlyWeatherState {
  hours: IHourlyWeatherItem[];
}

const initialState: IHourlyWeatherState = {
  hours: [],
};

export const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState,
  reducers: {
    setHours: (
      state,
      action: PayloadAction<{ time: string[]; temperature2m: number[] }>
    ) => {
      const hours: IHourlyWeatherItem[] = [];

      action.payload.time.forEach((t) => {
        const dateObject = new Date(t);
        const timeString = dateObject.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        hours.push({
          time: timeString,
          temperature: 0,
          icon: "*ICON*",
        });
      });

      hours.forEach((h, i) => {
        h.temperature = Number(action.payload.temperature2m[i].toFixed(2));
      });

      state.hours = hours;
    },
  },
});

export const { setHours } = hourlyWeatherSlice.actions;

export default hourlyWeatherSlice.reducer;
