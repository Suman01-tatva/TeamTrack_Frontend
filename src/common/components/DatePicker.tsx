import React from 'react';
import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerFieldProps {
  name: string;
  label: string;
  // add other props if needed
  [key: string]: unknown;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props.name);
  const { setValue, setTouched } = helpers;

  return (
    <div className="mb-4">
      <label htmlFor={props.name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <DatePicker
        id={props.name}
        {...field}
        {...props}
        selected={field.value ? new Date(field.value) : null}
        onChange={(date: Date | null) => setValue(date)}
        onBlur={() => setTouched(true)}
        className="
          bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
          dark:focus:ring-blue-500 dark:focus:border-blue-500
        "
        placeholderText="Select date"
        dateFormat="MMMM d, yyyy"
      />
      {meta.touched && meta.error ? (
        <p className="text-red-600 text-xs mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default DatePickerField;
