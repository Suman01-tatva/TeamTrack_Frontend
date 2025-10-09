import { Formik, Form } from "formik";
import FormControl from "../formControls/formControls";
import type { DynamicFormProps } from "./type";

const DynamicForm = <T extends object>({
  formConfig,
  initialValues,
  validationSchema,
  onSubmit,
  // confirmText = "Submit",
  // cancelText = "Cancel",
}: DynamicFormProps<T>) => {
  const handleSubmit = (values: T) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit: formikHandleSubmit }) => (
        <Form onSubmit={formikHandleSubmit}>
          <div>
            {formConfig.map((item, index) => (
              <div key={index} className={`my-2 ${item.className || ""}`}>
                <FormControl formControlConfig={item} />
              </div>
            ))}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;