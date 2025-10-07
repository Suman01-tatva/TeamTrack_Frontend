import React from "react";
import { useFieldError } from "../../../../common/hooks/useFieldError";
import { FormControl, FormLabel } from "@mui/material";
import type { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { DatePickerFieldProps } from "./types";

const DatePickerField: React.FC<{ dateConfig: DatePickerFieldProps }> = ({
  dateConfig,
}) => {
  const { field, showError, helperText, setValue } =
    useFieldError<Dayjs | null>({ ...dateConfig });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl fullWidth={dateConfig.fullWidth ?? true} error={showError} margin="normal">
        {dateConfig.label && <FormLabel>{dateConfig.label}</FormLabel>}
        <DatePicker
          {...field}
          value={field.value || null}
          onChange={(date) => {
            setValue(date);
          }}
          disabled={dateConfig.disabled ?? false}
          slotProps={{
            textField: {
              variant: "outlined",
              fullWidth : dateConfig.fullWidth ?? true,
              error: showError,
              helperText,
            },
          }}
          format="DD/MM/YYYY"
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default DatePickerField;
