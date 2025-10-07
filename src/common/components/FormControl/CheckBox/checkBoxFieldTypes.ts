import type { CommonProps } from "../../../types/componentTypes";

export interface CheckboxFieldProps extends CommonProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}