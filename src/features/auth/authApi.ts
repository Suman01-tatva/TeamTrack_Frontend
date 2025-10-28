import apiConfig from "../../common/api/apiConfig";
import type { LoginPayload, LoginResponse } from "./types/LoginTypes";
import type { RegisterOrganizationPayload, RegisterUserPayload } from "./types/RegisterTypes";

export const loginApi = (
  LoginPayload: LoginPayload
)  => {
  const response = apiConfig.post<ApiResponse<LoginResponse>>(
    "/auth/login",
      LoginPayload
  );
  return response;
};

export const registerOrganization = (
  RegisterOrganizationPayload: RegisterOrganizationPayload
)  => {
  const response = apiConfig.post<ApiResponse<LoginResponse>>(
    "/auth/registerOrganization",
      RegisterOrganizationPayload
  );
  return response;
};

export const registerUser = (
  RegisterUserPayload: RegisterUserPayload
)  => {
  const response = apiConfig.post<ApiResponse<LoginResponse>>(
    "/auth/registerUser",
      RegisterUserPayload
  );
  return response;
};

export const logoutFromAll = ()  => {
  const response = apiConfig.post<ApiResponse<null>>("/auth/logout-all",{});
  return response;
}