import * as Yup from "yup";
import type { FormControlConfig } from "../../types/commonTypes";

export interface DynamicFormProps<T extends object> {
  formConfig: FormControlConfig[];
    onSubmit: (values: T) => void;
  initialValues: T;
  validationSchema: Yup.ObjectSchema<T>;
  confirmText?: string;
  cancelText?: string;
}