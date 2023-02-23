import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email address"),
  mobile: Yup.number().required("Mobile is a required field"),
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  user_name: Yup.string().required("User Name is required"),
  country: Yup.string().required("Country is required"),
  password: Yup.string()
    .required("Password is a required field")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required("Confirm Password is a required field"),
  agree: Yup.string().required("Check the box above"),
});

export const loginValidationSchema = Yup.object().shape({
  user_name: Yup.string().required("Email is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(4, "Password should be above 4 characters "),
});
 