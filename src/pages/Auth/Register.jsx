import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./auth.scss";

import { Formik } from "formik";
import { registerForm } from "../../Formik/registerForm";
import http from "../../util/http";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { validateRegisterValues } from "../../util/validators";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const res = await http.post("/register/", {
        email: values.email,
        password: values.password,
        username: values.username,
      });

      if (res.status === 201) {
        message.open({
          type: "success",
          content: "An account has been created. Please log in",
        });
        navigate(`/login?email=${values.email}`, { replace: true });
      }
    } catch (err) {
      handleError(err);
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main id="register">
      <Breadcrumb>Register</Breadcrumb>
      <div className="container">
        <Formik
          initialValues={{
            email: "",
            password: "",
            username: "",
          }}
          validate={validateRegisterValues}
          onSubmit={handleSubmit}
        >
          {registerForm}
        </Formik>
      </div>
    </main>
  );
}

const handleError = (err) => {
  const emailError = err.response?.data?.email?.at(0);
  const usernameError = err.response.data?.username?.at(0);

  if (emailError && emailError.includes("already exists")) {
    message.error("This email is already registered");
  }
  if (usernameError && usernameError.includes("already exists")) {
    message.error("This username is already taken");
  }
};
