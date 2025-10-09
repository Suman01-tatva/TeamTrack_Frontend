import "../../../common/components/FormControl/Button/buttonStyle.css";
import { Form, Formik } from "formik";
import { UserRegisterSchema } from "../schema/RegisterSchema";
import {
  GetButtonConfig,
  GetInputFieldConfig,
} from "../../../common/utils/formControlConfig";
import FormControl from "../../../common/components/formControls/formControls";

export const UserRegisterForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("User Register Submitted:", values);
    // TODO: call API to save user
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-600">Sign up to start managing your projects</p>
      </div>

      {/* Formik Form */}
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
            <span className="px-4 bg-white text-gray-500 font-medium">
              Already have an account?
            </span>
          </div>
        </div>
      </div>

      {/* Back to Login */}
      <div className="text-center">
        <a
          href="/login"
          className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
};