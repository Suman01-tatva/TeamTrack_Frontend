import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import loadingReducer from '../common/loader/loadingSlice';
import { projectApi } from "../features/projects/projectApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
