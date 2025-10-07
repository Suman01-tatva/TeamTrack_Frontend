import type { ButtonProps } from "../components/button/types";
import type { CheckboxProps } from "../components/formControlls/checkbox/types";
import type { DatePickerFieldProps } from "../components/formControlls/datePicker/types";
import type {
  DropdownFieldProps,
  MultiSelectDropdownProps,
} from "../components/formControlls/dropdown/types";
import type { RadioGroupFieldProps } from "../components/formControlls/radioGroup/types";
import type { SearchBarProps } from "../components/searchBar/types";
import type { TextareaFieldProps } from "../components/formControlls/textArea/types";
import type { InputFieldProps } from "../components/formControlls/textBox/types";
import type { ToggleSwitchProps } from "../components/formControlls/toggleSwitch/types";
import type { FileUploadFieldProps } from "../components/fileUpload/types";
import type { buttonTypes, inputFieldTypes } from "../../common/const/general";
import type { Option } from "../../common/const/general";



export const GetInputFieldConfig = (
  id: string,
  name: string,
  type: inputFieldTypes,
  label?: string,
  placeholder?: string,
  className?: string,
  autoComplete?: string,
  disabled?: boolean,
  readonly?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string | number | boolean
): InputFieldProps => {
  const config: InputFieldProps = {
    id: id,
    name: name,
    type: type ?? "text",
    value: value ?? "",
    label: label,
    placeholder: placeholder,
    className: className,
    autoComplete: autoComplete,
    disabled: disabled,
    readonly: readonly,
    onChange: onChange,
  };
  return config;
};

export const GetDatePickerConfig = (
  id?: string,
  name?: string,
  className?: string,
  fullWidth?: boolean,
  disabled?: boolean,
  onChange?: () => void
): DatePickerFieldProps => {
  const config: DatePickerFieldProps = {
    id: id,
    name: name ?? "",
    className: className,
    disabled: disabled,
    fullWidth: fullWidth,
    onChange: onChange,
  };
  return config;
};

export const GetButtonConfig = (
  type?: buttonTypes,
  className?: string,
  label?: string,
  varient?: "text" | "outlined" | "contained",
  fullWidth?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  to?: string,
  icon?: React.ReactNode,
  iconOnly?: boolean,
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  disabled?: boolean,
): ButtonProps => {
  const config: ButtonProps = {
    onClick: onClick,
    type: type ?? "button",
    className: className,
    variant: varient ?? "contained",
    disabled: disabled,
    fullWidth: fullWidth ?? true,
    icon: icon,
    iconOnly: iconOnly ?? false,
    label: label,
    startIcon: startIcon,
    endIcon: endIcon,
    to: to,
  };
  return config;
};

export const GetDropdownConfig = (
  name: string,
  label: string,
  options: Option[],
  fullWidth?: boolean,
  defaultValue?: string | number,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
): DropdownFieldProps => {
  const config: DropdownFieldProps = {
    name: name,
    label: label,
    options: options,
    fullWidth: fullWidth,
    defaultValue: defaultValue,
    onChange: onChange,
  };
  return config;
};

export const GetMultiSelectDropdownConfig = (
  name: string,
  label: string,
  options: Option[],
  className?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
): MultiSelectDropdownProps => {
  const config: MultiSelectDropdownProps = {
    name: name,
    label: label,
    options: options,
    className: className,
    onChange: onChange,
  };
  return config;
};

export const GetSearchBarConfig = (
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  name?: string,
  id?: string,
  className?: string
): SearchBarProps => {
  const config: SearchBarProps = {
    id: id,
    name: name,
    className: className,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
  };
  return config;
};

export const GetCheckBoxConfig = (
  name: string,
  label: string,
  className?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  disabled?: boolean,
  checked?: boolean,
    labelClassName?: string,
  value?: string | number | boolean
): CheckboxProps => {
  return {
    name: name,
    label: label,
    className: className,
    onChange: onChange ?? (() => {}),
    disabled: disabled ?? false,
    checked: checked,
    labelClassName: labelClassName ?? "",
    value: value,
  };
};

export const GetRadioConfig = (
  name: string,
  options: Option[],
  label?: string,
  orientation?: "row" | "column",
  disabledOptions?: string[],
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  className?: string,
): RadioGroupFieldProps => {
  const config: RadioGroupFieldProps = {
    name: name,
    options: options,
    label: label,
    value: value,
    orientation: orientation,
    disabledOptions: disabledOptions ?? [],
    onChange: onChange,
    className: className,
  };
  return config;
};

export const GetToggleSwitchConfig = (
  name: string,
  label: string,
  className?: string,
  disabled?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
): ToggleSwitchProps => {
  return {
    name: name,
    label: label,
    className: className,
    disabled: disabled ?? false,
    onChange: onChange ?? (() => {}),
  };
};

export const GetTextAreaConfig = (
  name: string,
  label: string,
  id?: string,
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  className?: string,
  value?: string,
  minRows?: number,
  maxRows?: number,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
): TextareaFieldProps => {
  const config : TextareaFieldProps = {
    id: id,
    name: name,
    label: label,
    disabled: disabled ?? false,
    readonly: readonly ?? false,
    className: className,
    value: value ?? "",
    minRows: minRows ?? 3,
    maxRows: maxRows ?? 5,
    placeholder: placeholder,
    onChange: onChange ?? (() => {}), 
  }
  return config;
}

export const GetFileUploadConfig = (
  name: string,
  label: string,
  className?: string
): FileUploadFieldProps => {
  return {
    name: name,
    label: label,
    className: className,
  };
};
