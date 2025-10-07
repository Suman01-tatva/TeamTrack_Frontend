import React from "react";
import { TextField } from "@mui/material";
import { useFieldError } from "../../../../common/hooks/useFieldError";
import type { TextareaFieldProps } from "./types";

const TextAreaField: React.FC<{ textareaConfig: TextareaFieldProps }> = ({
  textareaConfig,
}) => {
  const minRows: number = 3;
  const disabled: boolean = false;
  const { field, showError, helperText } = useFieldError<string>(textareaConfig);

  return (
    <div>
      <TextField
        id={textareaConfig.id}
        aria-label={textareaConfig.label || "textarea"}
        placeholder={textareaConfig.placeholder}
        disabled={textareaConfig.disabled ?? disabled}
        minRows={textareaConfig.minRows ?? minRows}
        maxRows={textareaConfig.maxRows}
        multiline
        label={textareaConfig.label}
        error={showError}
        className={`w-full border rounded-md ${
          showError
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-400 focus:border-blue-500 focus:ring-blue-500"
        } focus:outline-none focus:ring-1 ${
          textareaConfig.className || ""
        }`}
        {...field}
      />
      {showError && helperText && (
        <div
          id={`${textareaConfig.id}-helper-text`}
          className="text-red-600 text-xs mt-1"
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export default TextAreaField;