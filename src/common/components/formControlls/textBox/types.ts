export interface InputFieldProps {
  id: string;
  name: string;
  type: "email" | "text" | "password" | "number" | "date";
  value?: string | number | boolean;
  label?: string;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
