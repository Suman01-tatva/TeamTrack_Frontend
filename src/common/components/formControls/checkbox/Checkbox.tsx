import React from "react";
import { Checkbox } from "@mui/material";
import type { CheckboxProps } from "./types";
import { useFieldError } from "../../../../common/hooks/useFieldError";

const CheckboxField: React.FC<{
  checkBoxConfig: CheckboxProps;
}> = ({ checkBoxConfig }) => {
  const { field, helperText, showError } =
    useFieldError<boolean>(checkBoxConfig);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    if (checkBoxConfig.onChange) checkBoxConfig.onChange(e);
  };

  return (
    <>
      <div>
        <Checkbox
          {...field}
          className={checkBoxConfig.className}
          checked={field.value}
          onChange={onChange}
        />
        <span className={`mt-1 text-gray-500 ${checkBoxConfig.labelClassName}`}>
          {checkBoxConfig.label}
        </span>

        {showError ? <div className="text-red-600">{helperText}</div> : null}
      </div>
    </>
  );
};

export default CheckboxField;
