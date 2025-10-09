import { type DatePickerProps } from "@mui/x-date-pickers/DatePicker";

export interface    DatePickerFieldProps extends DatePickerProps {
    id?: string;
    name: string;
    className?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    onChange?: () => void;
}