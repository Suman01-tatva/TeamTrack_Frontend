import React from "react";
import { useField } from "formik";
import { Checkbox } from "@mui/material";
import type { CheckboxFieldProps } from "../CheckBox/checkBoxFieldTypes";




const CheckboxField: React.FC<{
  checkBoxConfig: CheckboxFieldProps;
}> = ({ checkBoxConfig }) => {
  const { ...props } = checkBoxConfig;

  const [checkBoxField, meta] = useField({ ...props });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkBoxField.onChange(e);
    if (props.onChange) props.onChange(e);
  };

  return (
    <>
      <Checkbox
        {...checkBoxField}
        checked={checkBoxField.value}
        onChange={onChange}
      />
      <span className="ml-2">{props.label}</span>

      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default CheckboxField;
