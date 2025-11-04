import type { CheckboxProps } from "../components/formControls/checkbox/types";
import type { DatePickerFieldProps } from "../components/formControls/datePicker/types";
import type {
  DropdownFieldProps,
  MultiSelectDropdownProps,
} from "../components/formControls/dropdown/types";
import type { RadioGroupFieldProps } from "../components/formControls/radioGroup/types";
import type { TextareaFieldProps } from "../components/formControls/textArea/types";
import type { ToggleSwitchProps } from "../components/formControls/toggleSwitch/types";
import { type ButtonProps } from "../components/button/types";

export interface InputFieldProps extends CommonFieldProps {
  type: "email" | "text" | "password" | "number" | "date";
  autoComplete?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CommonFieldProps {
  id: string;
  name: string;
  value?: string | number | boolean;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export interface ErrorResponseData {
  errors?: Record<string, string[]>;
  message?: string;
  [key: string]: undefined | string | Record<string, string[]>;
}

export interface CustomButtonProps extends ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  to?: string;
}

export type formConfigType =  "input" | "checkbox" | "toggle" | "date"| "dropdown"| "multiselect"| "button"| "radio"| "textarea";
export type formConfigPropsTypes = InputFieldProps| CheckboxProps| ToggleSwitchProps| DatePickerFieldProps| DropdownFieldProps| MultiSelectDropdownProps| ButtonProps| RadioGroupFieldProps| TextareaFieldProps;

export interface FormControlConfig {
  type: formConfigType;
  config: formConfigPropsTypes;
  children?: React.ReactNode;
  className?: string;
}