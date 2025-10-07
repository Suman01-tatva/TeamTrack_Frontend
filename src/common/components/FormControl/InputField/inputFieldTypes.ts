import type { CommonProps } from "../../../types/componentTypes";


export interface InputFieldProps extends CommonProps {
  type?: "text" | "email" | "password" | "number" | "date" | "time" | "checkbox";
  autoComplete?: string;
  disabled?: boolean;
  readonly?: boolean;
}


