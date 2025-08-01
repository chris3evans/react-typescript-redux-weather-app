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
      console.log(action, "action");
    },
  },
});

export const { setDays } = dailyWeatherSlice.actions;

export default dailyWeatherSlice.reducer;
