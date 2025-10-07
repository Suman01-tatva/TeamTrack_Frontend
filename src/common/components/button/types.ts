import { type ButtonProps as MUIButtonProps } from "@mui/material";

export interface ButtonProps extends MUIButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  label?: string;
  className?: string;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  to?: string;
}

export interface CancelButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export interface SubmitButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
