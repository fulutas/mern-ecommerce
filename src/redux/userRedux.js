import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({ 
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    logoutError : false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout : (state) => {
      state.currentUser = null
    },
    logoutFailure : (state) => {
      state.logoutError = true
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, logoutFailure } = userSlice.actions;
export default userSlice.reducer;
