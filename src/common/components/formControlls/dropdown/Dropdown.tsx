import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";
import { useFieldError } from "../../../../common/hooks/useFieldError";
import type { DropdownFieldProps } from "./types";

const DropdownField: React.FC<{ dropDownConfig: DropdownFieldProps }> = ({
  dropDownConfig,
}) => {
  const { field, showError, helperText } = useFieldError({
    ...dropDownConfig,
  });

  return (
    <FormControl
      fullWidth={dropDownConfig.fullWidth ?? true}
      error={showError}
      margin="normal"
    >
      <div></div>
      <InputLabel id={`${dropDownConfig.name}-label`}>
        {dropDownConfig.label}
      </InputLabel>
      <Select
        labelId={`${dropDownConfig.name}-label`}
        id={dropDownConfig.name}
        label={dropDownConfig.label}
        {...field}
      >
        {dropDownConfig.defaultValue && (
          <MenuItem value="" disabled>
            {dropDownConfig.defaultValue ?? ""}
          </MenuItem>
        )}
        {dropDownConfig.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {showError && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default DropdownField;
