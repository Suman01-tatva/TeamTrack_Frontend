export type inputFieldTypes =  "email" | "text" | "password" | "number" | "date";
export type buttonTypes = "button" | "submit" | "reset";

export interface Option {
  value: string;
  label: string;
}

export const ERRORS = {
  UNEXPECTED_ERROR: "An unexpected error occurred, Please try again later",
  LOGOUT_SUCCESS: "Logout Successful",
  SESSION_EXPIRED: "Session Expired, Please login again",
  FORBID: "Access Denied",
};