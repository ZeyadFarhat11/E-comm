import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./login.scss";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
import { useState } from "react";
import { Formik } from "formik";
import { loginForm } from "../../components/Formik/LoginForm";

export default function Login() {
  const handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(true);
    console.log("Submit");
    await new Promise((res) => setTimeout(res, 5000));
    // console.log(values);
    // alert('submitted')
  };
  const valdiateValues = () => {};
  return (
    <main id="login">
      <Breadcrumb>Login</Breadcrumb>
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false,
          }}
          validate={valdiateValues}
          onSubmit={handleSubmit}
        >
          {loginForm}
        </Formik>
      </div>
    </main>
  );
}
