import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./auth.scss";

import { Formik } from "formik";
import { loginForm } from "../../components/Formik/LoginForm";
import { message } from "antd";
import http from "../../util/http";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(true);
    try {
      const res = await http.post("/token/", {
        email: values.email,
        password: values.password,
      });
      if (res.status === 200) {
        if (values.remember)
          localStorage.setItem("loginToken", res.data.access);
        message.open({
          type: "success",
          content: "You have been logged in successfully",
        });
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
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
