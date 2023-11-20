import isEmail from "validator/lib/isEmail";
import isAlphanumeric from "validator/es/lib/isAlphanumeric";

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
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export const validateChangePasswordValues = (values) => {
  const errors = {};
  if (!values.currentPassword) {
    errors.currentPassword = "Required";
  }
  if (!values.newPassword) {
    errors.newPassword = "Required";
  } else if (values.newPassword.trim().length < 6) {
    errors.newPassword = "Password is too short";
  } else if (values.newPassword.trim().length > 32) {
    errors.newPassword = "Password is too long";
  }
  if (!values.confirmNewPassword) {
    errors.confirmNewPassword = "Required";
  } else if (values.confirmNewPassword.trim().length < 6) {
    errors.confirmNewPassword = "Password is too short";
  } else if (values.confirmNewPassword.trim().length > 32) {
    errors.confirmNewPassword = "Password is too long";
  }

  return errors;
};

export const validateAddAddress = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.trim().length < 3) {
    errors.firstName = "First Name is too short";
  } else if (values.firstName.trim().length > 32) {
    errors.firstName = "First Name is too long";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.trim().length < 3) {
    errors.lastName = "Last Name is too short";
  } else if (values.lastName.trim().length > 32) {
    errors.lastName = "Last Name is too long";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!isEmail(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!isAlphanumeric(values.phone)) {
    errors.phone = "Phone should only include numbers";
  } else if (values.phone.length !== 11) {
    errors.phone = "Phone should contain 11 number";
  }

  if (!values.address1) {
    errors.address1 = "Required";
  } else if (values.address1.trim().length < 10) {
    errors.address1 = "Address1 is too short";
  } else if (values.address1.trim().length > 512) {
    errors.address1 = "Address1 is too long";
  }
  if (!values.zipCode) {
    errors.zipCode = "Required";
  } else if (values.zipCode.trim().length < 3) {
    errors.zipCode = "zipCode is too short";
  } else if (values.zipCode.trim().length > 8) {
    errors.zipCode = "zipCode is too long";
  }
  return errors;
};
