import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICurrentWeatherState {
  time: string;
  temperature2m: number;
}

const initialState: ICurrentWeatherState = {
  time: "",
  temperature2m: 0,
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<ICurrentWeatherState>) => {
      state.time = action.payload.time;
      state.temperature2m = action.payload.temperature2m;
    },
  },
});

export const { setValues } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
