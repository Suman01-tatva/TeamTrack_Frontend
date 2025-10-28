import "../../../common/components/FormControl/Button/buttonStyle.css";
import { LoginSchema } from "../schema/loginSchema";
import type { LoginFormProps } from "../types/LoginTypes";
import {
  GetButtonConfig,
  GetCheckBoxConfig,
  GetInputFieldConfig,
} from "../../../common/utils/formControlConfig";
import { Form, Formik } from "formik";
import FormControl from "../../../common/components/formControls/formControls";

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const initialValues = {
    email: "",
    password: "",
    isOrganization: false,
    rememberMe: false,
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Submitted values:", values);
    onSubmit(values);
  };

  return (
    <div
      className="w-full max-w-md mx-auto rounded-2xl p-8 shadow-2xl
    bg-white/10 backdrop-blur-md border border-white/20
    text-white  hover:border-white/60 transition-border duration-300"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-gray-400">Sign in to your account to continue</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit: formikHandleSubmit }) => (
          <Form onSubmit={formikHandleSubmit} className="space-y-5">
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

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center">
                <FormControl
                  formControlConfig={{
                    type: "checkbox",
                    config: GetCheckBoxConfig("rememberMe", "Remember Me"),
                  }}
                />
              </div>
              <div className="flex items-center">
                <FormControl
                  formControlConfig={{
                    type: "checkbox",
                    config: GetCheckBoxConfig(
                      "isOrganization",
                      "Organization Account"
                    ),
                  }}
                />
              </div>
            </div>

            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            <div className="pt-2">
              <FormControl
                formControlConfig={{
                  type: "button",
                  config: GetButtonConfig(
                    "submit",
                    "btn-primary w-full py-3 text-base font-semibold bg-gray-800 hover:bg-gray-600 text-white rounded-xl transition-all",
                    "Sign In",
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
              Or continue with
            </span>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="w-full flex items-center justify-center px-4 py-3 border-2 border-gray-700 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="ml-3 text-sm font-semibold text-gray-200">
            Continue with Google
          </span>
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 mb-3">Don't have an account?</p>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-gray-400">Register as</span>
          <a
            href="/org-register"
            className="font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors"
          >
            Organization
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="/user-register"
            className="font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors"
          >
            Individual User
          </a>
        </div>
      </div>
    </div>
  );
};