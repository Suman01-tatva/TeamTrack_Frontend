import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "./types/AuthTypes";
import { loginThunk } from "./authThunk";

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  error: null,

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(action.payload));
        localStorage.setItem("isAuthenticated", "true");
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = (action.payload as string) || "Login failed";
        state.isAuthenticated = false;
      });
  },
});

export const { logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
