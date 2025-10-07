import * as Yup from "yup";

export const OrgRegisterSchema = Yup.object().shape({
  name: Yup.string().max(50, "Name must be at most 50 characters").required("Name is required"),
  email: Yup.string().email("Invalid email").max(100, "Email must be at most 100 characters").required("Email is required"),
  password: Yup.string().max(100, "Password must be at most 100 characters").required("Password is required"),
});

export const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'First name must be at least 2 characters')
    .required('First name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});