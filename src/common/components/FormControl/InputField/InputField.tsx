import React from "react";
import { TextField } from "@mui/material";

import { useField } from "formik";
import { useFieldError } from "../../../../common/hooks/useFieldError";
import type { InputFieldProps } from "./inputFieldTypes";


const InputField: React.FC<{ inputConfig: InputFieldProps }> = ({ inputConfig }) => {
  const {
    type = "text",
    disabled = false,
    readonly = false,
    ...props
  } = inputConfig;
  const { showError, helperText } = useFieldError(props);

  const [inputField] = useField(props);

  return (
    <div>
      <TextField
        id={props.id}
        type={type}
        label={props.label}
        autoComplete={props.autoComplete}
        className={props.className}
        fullWidth
        variant="outlined"
        disabled={disabled}
        aria-readonly={readonly}
        aria-autocomplete="none"
        error={showError}
        helperText={helperText}
        {...inputField}
      />
    </div>
  );
};

export default InputField;
