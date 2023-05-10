import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";

type ExampleProps = {
  count: number;
};

const initialState: ExampleProps = {
  count: 0,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = exampleSlice.actions;

export const selectCount = (state: RootState) => state.example.value;

export default exampleSlice.reducer;
