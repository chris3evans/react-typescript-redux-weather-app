import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IExampleState {
  exampleNumber: number;
  exampleText: string;
}

const initialState: IExampleState = {
  exampleNumber: 0,
  exampleText: "I started like this",
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    example: (state) => {
      state.exampleNumber += 1;
    },
    example2: (state, action: PayloadAction<string>) => {
      state.exampleText = action.payload;
    },
  },
});

export const { example, example2 } = exampleSlice.actions;

export default exampleSlice.reducer;
