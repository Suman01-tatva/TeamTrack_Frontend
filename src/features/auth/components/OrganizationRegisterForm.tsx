import "../../../common/components/FormControl/Button/buttonStyle.css";
import { Form, Formik } from "formik";
import { OrgRegisterSchema } from "../schema/RegisterSchema";
import {
  GetButtonConfig,
  GetInputFieldConfig,
} from "../../../common/utils/formControlConfig";
import FormControl from "../../../common/components/formControls/formControls";
import type { RegisterOrganizationPayload, RegisterOrgFormProps } from "../types/RegisterTypes";

export const OrganizationRegisterForm: React.FC<RegisterOrgFormProps> = ({onSubmit}) => {

  const initialValues : RegisterOrganizationPayload = {
    name: "",
    email: "",
    password: "",
    role: 2,
  };

  const handleSubmit = async (values: typeof initialValues)  => {
    console.log("Organization Register Submitted:", values);
    onSubmit(values);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl p-8 shadow-2xl
    bg-white/10 backdrop-blur-md border border-white/20
    text-white  hover:border-white/60 transition-border duration-300">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          Create Organization Account
        </h2>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={OrgRegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit: formikHandleSubmit }) => (
          <Form onSubmit={formikHandleSubmit} className="space-y-5">
            <div>
              <FormControl
                formControlConfig={{
                  type: "input",
                  config: GetInputFieldConfig(
                    "name",
                    "name",
                    "text",
                    "Organization Name"
                  ),
                }}
              />
            </div>
            <input type="hidden" name="role" value={2} />

            <div>
              <FormControl
                formControlConfig={{
                  type: "input",
                  config: GetInputFieldConfig(
                    "email",
                    "email",
                    "email",
                    "Email Address"
                  ),
                }}
              />
            </div>

            <div>
              <FormControl
                formControlConfig={{
                  type: "input",
                  config: GetInputFieldConfig(
                    "password",
                    "password",
                    "password",
                    "Password"
                  ),
                }}
              />
            </div>

            <div className="pt-2">
              <FormControl
                formControlConfig={{
                  type: "button",
                  config: GetButtonConfig(
                    "submit",
                    "btn-primary w-full py-3 text-base font-semibold",
                    "Register",
                    "contained",
                    true
                  ),
                }}
              />
            </div>
          </Form>
        )}
      </Formik>

      <div className="my-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gray-900 text-gray-400 font-medium">
              Already have an account?
            </span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/login"
          className="font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
};
