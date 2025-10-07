import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
    isOrganization: Yup.boolean().required().default(false),
  rememberMe: Yup.boolean().required().default(false),
});
