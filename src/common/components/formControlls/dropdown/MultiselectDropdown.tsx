import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  FormHelperText,
  Checkbox,
  ListItemText,
  FormControlLabel,
} from "@mui/material";
import { useFieldError } from "../../../../common/hooks/useFieldError";
import type { MultiSelectDropdownProps } from "./types";
import type { Option } from "../../../const/general";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultiSelectDropdown: React.FC<{
  multiSelectDropdownConfig: MultiSelectDropdownProps;
}> = ({ multiSelectDropdownConfig }) => {
  const { field, showError, helperText, setValue } = useFieldError<string[]>({
    ...multiSelectDropdownConfig,
  });

  const selectedValues = field.value || [];

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allValues = multiSelectDropdownConfig.options.map(
        (option: Option) => option.value
      );
      setValue(allValues);
    } else {
      setValue([]);
    }
  };

  const renderSelectedValues = (selected: string[]) => {
    if (selected.length === multiSelectDropdownConfig.options.length)
      return "All selected";
    else if (selected.length > 2) return `${selected.length} selected`;

    const selectedLabels = multiSelectDropdownConfig.options
      .filter((option) => selected.includes(option.value as string))
      .map((option) => option.label);

    return selectedLabels.join(", ");
  };

  return (
    <FormControl fullWidth sx={{ m: 1 }} error={showError} className="mx-0">
      <InputLabel id={`${field.name}-label`}>
        {multiSelectDropdownConfig.label}
      </InputLabel>
      <Select
        labelId={`${field.name}-label`}
        id={`${field.name}-select`}
        multiple
        input={<OutlinedInput label={multiSelectDropdownConfig.label} />}
        MenuProps={MenuProps}
        renderValue={renderSelectedValues}
        className={multiSelectDropdownConfig.className ?? ""}
        {...field}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={
                selectedValues.length ===
                multiSelectDropdownConfig.options.length
              }
              indeterminate={
                selectedValues.length > 0 &&
                selectedValues.length < multiSelectDropdownConfig.options.length
              }
              onChange={handleSelectAll}
              color="primary"
            />
          }
          label="Select All"
          sx={{ ml: 2 }}
        />
        {multiSelectDropdownConfig.options.map((option: Option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={selectedValues.includes(option.value)} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
      {showError && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default MultiSelectDropdown;
