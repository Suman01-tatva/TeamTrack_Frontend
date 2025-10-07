import * as Yup from "yup";
import type { FormControlConfig } from "../../../types/commonTypes";

export interface DynamicFormModalProps<T extends object> {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    onSubmit: (values: T) => void;
    formConfig: FormControlConfig[];
    initialValues: T;
    validationSchema: Yup.ObjectSchema<T>;
    confirmText?: string;
    cancelText?: string;
  }
  