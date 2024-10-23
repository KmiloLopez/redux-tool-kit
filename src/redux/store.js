import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "./userSlice";
import mynameSlice from "./mislice";
import counterSlice from "./counterSlice";
// import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    usero: myReducer,
    examp: mynameSlice,
    counter: counterSlice,
  },
});
