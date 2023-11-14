import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./auth.scss";

import { Formik } from "formik";
import { loginForm } from "../../Formik/loginForm";
import { message } from "antd";
import http from "../../util/http";
import { useNavigate, useSearchParams } from "react-router-dom";
import { validateLoginValues } from "../../util/validators";
import useAuthContext from "../../context/AuthContext";

export default function Login() {
  const { saveUser } = useAuthContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  let searchParamsObj = Object.fromEntries(searchParams);

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const res = await http.post("/token/", {
        email: values.email,
        password: values.password,
      });
      if (res.status === 200) {
        if (values.remember) {
          const user = { email: values.email, username: "zeyadfarhat" };
          const token = res.data.access;
          saveUser({ user, token });
        }

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

  return (
    <main id="login">
      <Breadcrumb>Login</Breadcrumb>
      <div className="container">
        <Formik
          initialValues={{
            email: searchParamsObj.email || "",
            password: "",
            remember: true,
          }}
          validate={validateLoginValues}
          onSubmit={handleSubmit}
        >
          {loginForm}
        </Formik>
      </div>
    </main>
  );
}
