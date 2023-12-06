import { Button, Input, message } from "antd";
import { Formik } from "formik";
import React from "react";
import { validateChangePasswordValues } from "../../util/validators";
import http from "../../util/http";
const ChangePassword = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (values.newPassword !== values.confirmNewPassword) {
      setSubmitting(false);
      return message.open({ content: "Passwords didn't match", type: "error" });
    }
    try {
      await http.post(
        "/change_password/",
        {
          old_password: values.currentPassword,
          new_password: values.newPassword,
        },
        { sendToken: true }
      );
      setSubmitting(false);
      message.open({
        type: "success",
        content: "The password has been changed",
      });
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }}
      validate={validateChangePasswordValues}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
      }) => {
        const currentPasswordError =
          errors.currentPassword && touched.currentPassword
            ? errors.currentPassword
            : null;
        const newPasswordError =
          errors.newPassword && touched.newPassword ? errors.newPassword : null;
        const confirmNewPasswordError =
          errors.confirmNewPassword && touched.confirmNewPassword
            ? errors.confirmNewPassword
            : null;

        return (
          <form onSubmit={handleSubmit}>
            <h2 style={{ marginTop: "50px" }}>Change Password</h2>
            <div className="control">
              <label htmlFor="currentPassword">Current Password</label>
              <Input.Password
                id="currentPassword"
                placeholder="Current Password"
                value={values.currentPassword}
                onChange={handleChange}
                name="currentPassword"
                style={{
                  borderColor: currentPasswordError ? "#cc0000" : undefined,
                }}
                autoComplete="new-password"
              />
              {!!currentPasswordError && (
                <p className="error">{currentPasswordError}</p>
              )}
            </div>
            <div className="wrapper">
              <div className="control">
                <label htmlFor="newPassword">New Password</label>
                <Input.Password
                  id="newPassword"
                  placeholder="New Password"
                  value={values.newPassword}
                  onChange={handleChange}
                  name="newPassword"
                  style={{
                    borderColor: newPasswordError ? "#cc0000" : undefined,
                  }}
                />
                {!!newPasswordError && (
                  <p className="error">{newPasswordError}</p>
                )}
              </div>
              <div className="control">
                <label htmlFor="confirmNewPassword">Confirm Password</label>
                <Input.Password
                  id="confirmNewPassword"
                  placeholder="Confirm Password"
                  value={values.confirmNewPassword}
                  onChange={handleChange}
                  name="confirmNewPassword"
                  style={{
                    borderColor: confirmNewPasswordError
                      ? "#cc0000"
                      : undefined,
                  }}
                />
                {!!confirmNewPasswordError && (
                  <p className="error">{confirmNewPasswordError}</p>
                )}
              </div>
            </div>
            <Button type="primary" loading={isSubmitting} htmlType="submit">
              Change Password
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default ChangePassword;
