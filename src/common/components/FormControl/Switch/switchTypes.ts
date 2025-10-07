import type { CommonProps } from "../../../types/componentTypes";

export interface SwitchFieldProps extends CommonProps {
  disabled?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}