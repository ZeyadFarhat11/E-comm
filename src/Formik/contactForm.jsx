import { Button, Input } from "antd";
import React from "react";
import InputControl from "../components/InputControl/InputControl";

const contactForm = ({
  handleSubmit,
  values,
  errors,
  touched,
  isSubmitting,
  handleChange,
  handleBlur,
}) => {
  const fullNameError =
    errors.fullName && touched.fullName ? errors.fullName : null;
  const emailError = errors.email && touched.email ? errors.email : null;
  const messageError =
    errors.message && touched.message ? errors.message : null;

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        label="Fullname"
        name="fullname"
        placeholder="Your Name"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={fullNameError}
      />
      <InputControl
        label="Email"
        name="email"
        placeholder="examble@gmail.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={emailError}
      />
      <InputControl
        inputType="textarea"
        label="Message"
        name="message"
        placeholder="Type your message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={messageError}
      />
      <Button htmlType="submit" type="primary" loading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default contactForm;
