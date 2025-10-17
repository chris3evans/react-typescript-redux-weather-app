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
        surface_pressure: number[];
      }>
    ) => {
      const hours: IHourlyWeatherItem[] = [];
      const now = new Date();
      const weatherHourIndexes: number[] = [];

      const filteredHours = action.payload.time.filter((t, i) => {
        const tDate = new Date(t);
        const milliSecondDifference = tDate.getTime() - now.getTime();
        const hourDifference = Math.floor(
          milliSecondDifference / (1000 * 60 * 60)
        );
        if (hourDifference >= 0 && hourDifference <= 23) {
          weatherHourIndexes.push(i);
          return true;
        } else {
          return false;
        }
      });

      filteredHours.forEach((t, i) => {
        const dateObject = new Date(t);
        const timeString = dateObject.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        hours.push({
          time: timeString,
          temperature: Number(
            action.payload.temperature_2m[weatherHourIndexes[i]].toFixed(2)
          ),
          icon: formatWeatherIcon(
            action.payload.weather_code[weatherHourIndexes[i]],
            action.payload.time[weatherHourIndexes[i]]
          ),
          surface_pressure: Number(
            action.payload.surface_pressure[weatherHourIndexes[i]].toFixed(2)
          ),
        });
      });

      state.hours = hours;
    },
  },
});

export const { setHours } = hourlyWeatherSlice.actions;

export default hourlyWeatherSlice.reducer;
