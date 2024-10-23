import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  username: null,
  email: "",
};

export const userSlice = createSlice({
  name: "userr",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { addUser, changeEmail } = userSlice.actions;
export const myReducer = userSlice.reducer;
