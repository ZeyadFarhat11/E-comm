import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./auth.scss";

import { Formik } from "formik";
import { registerForm } from "../../components/Formik/RegisterForm";

export default function Register() {
  const handleSubmit = async (values, { setSubmitting }) => {
    // setSubmitting(true);
    console.log("Submit");
    await new Promise((res) => setTimeout(res, 5000));
    // console.log(values);
    // alert('submitted')
  };
  const valdiateValues = () => {};
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
          validate={valdiateValues}
          onSubmit={handleSubmit}
        >
          {registerForm}
        </Formik>
      </div>
    </main>
  );
}
