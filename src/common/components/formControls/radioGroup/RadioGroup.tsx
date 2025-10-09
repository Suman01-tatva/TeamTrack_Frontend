import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import type { RadioGroupFieldProps } from "./types";
import { useFormikContext } from "formik";

const RadioGroupField: React.FC<{ radioConfig: RadioGroupFieldProps }> = ({
  radioConfig,
}) => {
  const {
    label,
    name,
    value,
    options,
    orientation = "row",
    disabledOptions = [],
    onChange,
    className = "",
  } = radioConfig;
  const { setFieldValue } = useFormikContext();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(name, event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <FormControl className={className}>
      {label && <FormLabel id={`${name}-label`}>{label}</FormLabel>}
      <RadioGroup
        row={orientation === "row"}
        aria-labelledby={`${name}-label`}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            disabled={disabledOptions.includes(option.value)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupField;
