import React from "react";
import InputField from "./textBox/TextBox";
import CustomCheckbox from "./checkbox/Checkbox";
import ToggleSwitch from "./toggleSwitch/ToggleSwitch";
import DatePickerField from "./datePicker/DatePicker";
import DropdownField from "./dropdown/Dropdown";
import MultiSelectDropdown from "./dropdown/MultiselectDropdown";

import type { InputFieldProps } from "./textBox/types";
import type { CheckboxProps } from "./checkbox/types";
import type { ToggleSwitchProps } from "./toggleSwitch/types";
import type { DatePickerFieldProps } from "./datePicker/types";
import type {
  DropdownFieldProps,
  MultiSelectDropdownProps,
} from "./dropdown/types";
import type { FormControlConfig } from "../../types/commonTypes";
import RadioGroupField from "./radioGroup/RadioGroup";
import type { RadioGroupFieldProps } from "./radioGroup/types";
import TextAreaField from "./textArea/TextArea";
import type { TextareaFieldProps } from "./textArea/types";
import Button from "../button/Button";
import type { ButtonProps } from "../button/types";

const FormControl: React.FC<{ formControlConfig: FormControlConfig }> = ({
  formControlConfig: formControlConfig,
}) => {
  switch (formControlConfig.type) {
    case "input":
      return (
        <InputField
          inputConfig={formControlConfig.config as InputFieldProps}
        />
      );

    case "checkbox":
      return (
        <CustomCheckbox
          checkBoxConfig={formControlConfig.config as CheckboxProps}
        />
      );

    case "toggle":
      return (
        <ToggleSwitch
          switchConfig={formControlConfig.config as ToggleSwitchProps}
        />
      );

    case "date":
      return (
        <DatePickerField
          dateConfig={formControlConfig.config as DatePickerFieldProps}
        />
      );

    case "dropdown":
      return (
        <DropdownField
          dropDownConfig={formControlConfig.config as DropdownFieldProps}
        />
      );

    case "multiselect":
      return (
        <MultiSelectDropdown
          multiSelectDropdownConfig={
            formControlConfig.config as MultiSelectDropdownProps
          }
        />
      );

    case "textarea":
      return (
        <TextAreaField
          textareaConfig={formControlConfig.config as TextareaFieldProps}
        />
      );

    case "radio":
      return (
        <RadioGroupField
          radioConfig={formControlConfig.config as RadioGroupFieldProps}
        />
      );

    case "button":
      return <Button buttonConfig={formControlConfig.config as ButtonProps} />;
    default:
      return null;
  }
};

export default FormControl;
