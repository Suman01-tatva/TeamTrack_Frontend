import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./types/AuthTypes";

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
    },
    loadUser: (state) => {
      const stored = localStorage.getItem("user");
      if (stored) state.user = JSON.parse(stored);
    },
  },
});

export const {login, logout, loadUser } = authSlice.actions;
export default authSlice.reducer;