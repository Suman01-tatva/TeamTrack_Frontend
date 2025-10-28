import "../../../common/components/FormControl/Button/buttonStyle.css";
import { Form, Formik } from "formik";
import { UserRegisterSchema } from "../schema/RegisterSchema";
import {
  GetButtonConfig,
  GetInputFieldConfig,
} from "../../../common/utils/formControlConfig";
import FormControl from "../../../common/components/formControls/formControls";
import type { RegisterUserFormProps } from "../types/RegisterTypes";

export const UserRegisterForm: React.FC<RegisterUserFormProps> = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("User Register Submitted:", values);
    onSubmit(values);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-2xl p-8 shadow-2xl
    bg-white/10 backdrop-blur-md border border-white/20
    text-white  hover:border-white/60 transition-border duration-300">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-400">Sign up to start managing your projects</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={UserRegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit: formikHandleSubmit }) => (
          <Form onSubmit={formikHandleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <FormControl
                formControlConfig={{
                  type: "input",
                  config: GetInputFieldConfig("name", "name", "text", "Full Name"),
                }}
              />
            </div>

            {/* Email */}
            <div>
              <FormControl
                formControlConfig={{
                  type: "input",
                  config: GetInputFieldConfig("email", "email", "email", "Email Address"),
                }}
              />
            </div>

            {/* Password */}
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

            {/* Confirm Password */}
            <div>
              <FormControl
                formControlConfig={{
                  type: "input",
                  config: GetInputFieldConfig(
                    "confirmPassword",
                    "confirmPassword",
                    "password",
                    "Confirm Password"
                  ),
                }}
              />
            </div>

            {/* Submit Button */}
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

      {/* Divider */}
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

      {/* Back to Login */}
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