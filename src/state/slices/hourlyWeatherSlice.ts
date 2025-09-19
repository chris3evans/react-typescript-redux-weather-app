import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHourlyWeatherItem } from "../../type-interfaces/interfaces";
import { formatWeatherIcon } from "../../services/utility";

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
      action: PayloadAction<{
        time: string[];
        temperature_2m: number[];
        weather_code: number[];
      }>
    ) => {
      const hours: IHourlyWeatherItem[] = [];
      const now = new Date();

      action.payload.time
        .filter((t) => {
          const tDate = new Date(t);
          const milliSecondDifference = tDate.getTime() - now.getTime();
          const hourDifference = Math.floor(
            milliSecondDifference / (1000 * 60 * 60)
          );
          return hourDifference >= 0 && hourDifference <= 23;
        })
        .forEach((t) => {
          const dateObject = new Date(t);
          const timeString = dateObject.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });

          hours.push({
            time: timeString,
            temperature: 0,
            icon: "",
          });
        });

      hours.forEach((h, i) => {
        h.temperature = Number(action.payload.temperature_2m[i].toFixed(2));
        h.icon = formatWeatherIcon(action.payload.weather_code[i]);
      });

      state.hours = hours;
    },
  },
});

export const { setHours } = hourlyWeatherSlice.actions;

export default hourlyWeatherSlice.reducer;
