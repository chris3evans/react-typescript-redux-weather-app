import { configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "./slices/currentWeatherSlice";

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
