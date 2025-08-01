import { configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "./slices/currentWeatherSlice";
import hourlyWeatherReducer from "./slices/hourlyWeatherSlice";
import dailyWeatherReducer from "./slices/dailyWeatherSlice";

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    hourlyWeather: hourlyWeatherReducer,
    dailyWeather: dailyWeatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
