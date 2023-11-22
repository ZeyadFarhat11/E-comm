import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./auth.scss";

import { Formik } from "formik";
import { loginForm } from "../../formik/loginForm";
import { message } from "antd";
import http from "../../util/http";
import { useNavigate, useSearchParams } from "react-router-dom";
import { validateLoginValues } from "../../util/validators";
import useAuthContext from "../../context/AuthContext";

export default function Login() {
  const { saveUser, setUser, setToken } = useAuthContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  let searchParamsObj = Object.fromEntries(searchParams);

  const handleUserData = async (remember, token) => {
    const res = await http.get("/user_details/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (remember) {
      saveUser({ user: res.data, token });
    } else {
      setUser(res.data);
      setToken(token);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await http.post("/token/", {
        email: values.email,
        password: values.password,
      });

      await handleUserData(values.remember, res.data.access);

      message.open({
        type: "success",
        content: "You have been logged in successfully",
      });

      navigate("/", { replace: true });
    } catch (err) {
      message.open({
        type: "error",
        content: "Invalid email or password",
      });
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
