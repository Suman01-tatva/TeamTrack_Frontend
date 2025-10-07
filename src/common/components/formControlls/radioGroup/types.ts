import type { Option } from "../../../const/general";

export interface RadioGroupFieldProps {
  name: string;
  options: Option[];
  label?: string;
  value?: string;
  orientation?: "row" | "column";
  disabledOptions?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}