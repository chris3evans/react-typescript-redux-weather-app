import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDailyWeatherItem } from "../../type-interfaces/interfaces";

export interface IDailyWeatherState {
  days: IDailyWeatherItem[];
}

const initialState: IDailyWeatherState = {
  days: [],
};

export const dailyWeatherSlice = createSlice({
  name: "dailyWeather",
  initialState,
  reducers: {
    setDays: (
      state,
      action: PayloadAction<{
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
      }>
    ) => {
      const days: IDailyWeatherItem[] = [];
      action.payload.time.forEach((t) => {
        const date = new Date(t);
        const weekday = date.toLocaleDateString("en-GB", { weekday: "long" });
        const dateString = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });

        days.push({
          date: dateString,
          weekday,
          icon: "*ICON*",
          lowestTemperature: 0,
          highestTemperature: 0,
        });
      });

      days.forEach((d, i) => {
        d.highestTemperature = Number(
          action.payload.temperature_2m_max[i].toFixed(2)
        );
        d.lowestTemperature = Number(
          action.payload.temperature_2m_min[i].toFixed(2)
        );
      });

      state.days = days;
    },
  },
});

export const { setDays } = dailyWeatherSlice.actions;

export default dailyWeatherSlice.reducer;
