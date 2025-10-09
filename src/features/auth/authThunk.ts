import { setLoading } from "../../common/loader/loadingSlice";
import Cookie from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { User } from "./types/AuthTypes";
import type { LoginPayload } from "./types/LoginTypes";
import { loginApi, registerOrganization, registerUser } from "./authApi";
import type { RegisterOrganizationPayload, RegisterUserPayload } from "./types/RegisterTypes";

export const loginThunk = createAsyncThunk<
  User,
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (LoginPayload, { dispatch, rejectWithValue }) => {
  dispatch(setLoading(true));
  try {
    const data = await loginApi(LoginPayload);
    if (!data.isSuccess) {
      return rejectWithValue(data.message || "Login failed");
    }

    Cookie.set("token", data.data?.token as string, {
      expires: LoginPayload.rememberMe ? 30 : 7,
      secure: true,
      sameSite: "Strict",
    });
    return data.data?.user as User;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error occurred");
  } finally {
    dispatch(setLoading(false));
  }
});

export const registerOrganizationThunk = createAsyncThunk<
  User,
  RegisterOrganizationPayload,
  { rejectValue: string }
>("auth/registerOrganization", async (RegisterOrganizationPayload, { dispatch, rejectWithValue }) => {
  dispatch(setLoading(true));
  try {
    const data = await registerOrganization(RegisterOrganizationPayload);
    if (!data.isSuccess) {
      return rejectWithValue(data.message || "Registration failed");
    }
    return data.data?.user as User;

  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error occurred");
  } finally {
    dispatch(setLoading(false));
  }
});

export const registerUserThunk = createAsyncThunk<
  User,
  RegisterUserPayload,
  { rejectValue: string }
>("auth/registerUser", async (RegisterUserPayload, { dispatch, rejectWithValue }) => {
  dispatch(setLoading(true));
  try {
    const data = await registerUser(RegisterUserPayload);
    if (!data.isSuccess) {
      return rejectWithValue(data.message || "Registration failed");
    }
    return data.data?.user as User;

  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error occurred");
  } finally {
    dispatch(setLoading(false));
  } 
})