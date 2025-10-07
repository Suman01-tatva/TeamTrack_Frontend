import React from "react";
import { Switch } from "@mui/material";
import { useField } from "formik";
import type { ToggleSwitchProps } from "./types";

const SwitchField: React.FC<{
  switchConfig: ToggleSwitchProps;
}> = ({ switchConfig }) => {

  const [switchField, meta] = useField({ ...switchConfig });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switchField.onChange(e);
    if (switchConfig.onChange) switchConfig.onChange(e);
  }
  return (
    <>
      <Switch
        {...switchField}
        checked={switchField.value}
        disabled={switchConfig.disabled}
        onChange={handleChange}

      />
      <span className="ml-2">{switchConfig.label}</span>
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default SwitchField;
