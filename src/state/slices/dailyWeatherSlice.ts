import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDailyWeatherItem } from "../../type-interfaces/interfaces";
import { IDailyWeatherResponse } from "../../type-interfaces/api-return-interfaces";
import { formatWeatherIcon } from "../../services/utility";
import { SVG_ICONS, SvgIcon } from "../../constants/svg-constants";

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
    setDays: (state, action: PayloadAction<IDailyWeatherResponse>) => {
      const days: IDailyWeatherItem[] = [];
      action.payload.daily.time.forEach((t) => {
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
          icon: "",
          lowestTemperature: 0,
          highestTemperature: 0,
          rainChance: 0,
        });
      });

      days.forEach((d, i) => {
        d.highestTemperature = Number(
          action.payload.daily.temperature_2m_max[i].toFixed(2)
        );
        d.lowestTemperature = Number(
          action.payload.daily.temperature_2m_min[i].toFixed(2)
        );
        d.icon = formatWeatherIcon(
          action.payload.daily.weather_code[i],
          action.payload.daily.time[i]
        );
        d.rainChance = Number(action.payload.daily.rain_sum[i].toFixed(2));
      });

      state.days = days;
    },
  },
});

export const { setDays } = dailyWeatherSlice.actions;

export default dailyWeatherSlice.reducer;
