import isEmail from "validator/lib/isEmail";

export const validateRegisterValues = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.trim().length <= 3) {
    errors.username = "Username is too short";
  } else if (values.username.trim().length > 32) {
    errors.username = "Username is too long";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!isEmail(values.email)) {
    errors.email = "Invalid email address!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.trim().length < 6) {
    errors.password = "Password is too short";
  } else if (values.password.trim().length > 32) {
    errors.password = "Password is too long";
  }
  return errors;
};

export const validateLoginValues = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!isEmail(values.email)) {
    errors.email = "Invalid email address!";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};
