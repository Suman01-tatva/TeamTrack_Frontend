import type { User } from "./AuthTypes";

export interface LoginPayload {
    email: string;
    password: string;
    rememberMe: boolean;
    isOrganization: boolean;
}

export interface LoginFormProps {
    onSubmit: (values: LoginPayload) => void;
}

export interface LoginResponse {
  token: string;
  user: User;
  isOrganization: boolean;
}