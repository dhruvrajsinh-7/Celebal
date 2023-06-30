import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    signup: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
