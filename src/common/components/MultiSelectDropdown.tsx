// MultiSelectDropdown.tsx
import React from 'react';
import { useField, useFormikContext } from 'formik';
import {
  Select,
  InputLabel,
  MenuItem,
  OutlinedInput,
  FormControl,
  FormHelperText,
  type SelectChangeEvent,
  type Theme,
  useTheme,
} from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectDropdownProps {
  name: string;
  label: string;
  options: Option[];
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 224,
      width: 250,
    },
  },
};

function getStyles(name: string, selectedNames: readonly string[], theme: Theme) {
  return {
    fontWeight:
      selectedNames.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ name, label, options }) => {
  const theme = useTheme();
  const [field, meta] = useField<string[]>(name);
  const { setFieldValue } = useFormikContext();
  const selectedValues = field.value || [];

  const handleChange = (event: SelectChangeEvent<typeof selectedValues>) => {
    const {
      target: { value },
    } = event;
    const newValues = typeof value === 'string' ? value.split(',') : value;
    setFieldValue(name, newValues);
  };

  return (
    <FormControl fullWidth error={Boolean(meta.touched && meta.error)} margin="normal">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        multiple
        value={selectedValues}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            style={getStyles(option.value, selectedValues, theme)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error ? <FormHelperText>{meta.error}</FormHelperText> : null}
    </FormControl>
  );
};

export default MultiSelectDropdown;
