import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../reducer";

export interface IExampleState {
  exampleNumber: number;
}

const initialState: IExampleState = {
  exampleNumber: 0,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    example: (state) => {
      state.exampleNumber += 1;
    },
  },
});

export const { example } = exampleSlice.actions;

export const selectExampleNumber = (state: RootState) =>
  state.example.exampleNumber;

export default exampleSlice.reducer;
