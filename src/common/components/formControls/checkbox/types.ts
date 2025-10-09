import { type CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

export interface CheckboxProps extends MuiCheckboxProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelClassName?: string;
}