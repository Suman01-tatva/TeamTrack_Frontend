import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "./types/AuthTypes";
import {
  loginThunk,
  logoutAllThunk,
  registerOrganizationThunk,
  registerUserThunk,
} from "./authThunk";
import Cookies from "js-cookie";

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true" || false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null,
  error: null,
  isLoading: false,
  isOrganization: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isOrganization = false;
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("isOrganization");
      Cookies.remove("access_token");
      Cookies.remove("token");
    },
    loadUser: (state) => {
      const stored = localStorage.getItem("user");
      if (stored) state.user = JSON.parse(stored);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
        localStorage.setItem("user", JSON.stringify(action.payload));
        localStorage.setItem("isAuthenticated", "true");
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = (action.payload as string) || "Login failed";
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      // Organization Registration
      .addCase(registerOrganizationThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        registerOrganizationThunk.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.isLoading = false;
          state.user = action.payload;
        }
      )
      .addCase(registerOrganizationThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || "Registration failed";
      })
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) || "User registration failed";
      })
      // Logout All
      .addCase(logoutAllThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutAllThunk.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(logoutAllThunk.rejected, (state, action) => {
        state.error = (action.payload as string) || "Logout failed";
        state.isLoading = false;
      });
  },
});

export const { logout, loadUser } = authSlice.actions;
export default authSlice.reducer;
