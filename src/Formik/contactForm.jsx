import { Button, Input } from "antd";
import React from "react";

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
      <div className="control">
        <label htmlFor="name">Fullname</label>
        <Input
          type="text"
          id="name"
          name="fullName"
          placeholder="Your Name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ borderColor: fullNameError ? "#cc0000" : "" }}
        />

        {!!fullNameError && <p className="error">{fullNameError}</p>}
      </div>
      <div className="control">
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="examble@gmail.com"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ borderColor: emailError ? "#cc0000" : "" }}
        />
        {!!emailError && <p className="error">{emailError}</p>}
      </div>
      <div className="control">
        <label htmlFor="message">Message</label>
        <Input.TextArea
          type="text"
          id="message"
          name="message"
          placeholder="Type your message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ borderColor: messageError ? "#cc0000" : "" }}
        />
        {!!messageError && <p className="error">{messageError}</p>}
      </div>
      <Button htmlType="submit" type="primary" loading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default contactForm;
