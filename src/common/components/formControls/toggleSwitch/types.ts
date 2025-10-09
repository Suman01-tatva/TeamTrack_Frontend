import type { SwitchProps } from "@mui/material";

export interface ToggleSwitchProps extends SwitchProps {
  disabled?: boolean;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}