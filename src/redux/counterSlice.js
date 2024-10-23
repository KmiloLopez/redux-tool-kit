import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementBy: (state, action) => state + action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state) => state + 5);
  },
});
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async () => {
    console.log("here ");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return;
  }
);
export const { increment, decrement, incrementBy } = counterSlice.actions;
export default counterSlice.reducer;
