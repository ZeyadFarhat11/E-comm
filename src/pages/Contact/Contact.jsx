import { message } from "antd";
import { Formik } from "formik";
import img from "../../assets/img/contact.webp";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import useAuthContext from "../../context/AuthContext";
import contactForm from "../../formik/contactForm";
import http from "../../util/http";
import { validateContact } from "../../util/validators";
import "./contact.scss";
export default function Contact() {
  const { user } = useAuthContext();
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await http.post("/contact/", {
      full_name: values.fullName,
      email: values.email,
      message: values.message,
    });

    setSubmitting(false);
    resetForm();
    message.open({
      type: "success",
      content: "Message has been sent",
    });
  };

  return (
    <main id="contact">
      <Breadcrumb>Contact</Breadcrumb>
      <div className="contact-container container">
        <div className="wrapper">
          <div className="text-wrapper">
            <div className="image">
              <img src={img} alt="banner" />
            </div>
            <div className="text">
              <h2>Get in touch</h2>
              <p>contact@e-comm.ng</p>
              <p>+234 4556 6665 34</p>
              <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
            </div>
          </div>
          <Formik
            initialValues={{
              fullName: "",
              email: user ? user.email : "",
              message: "",
            }}
            onSubmit={handleSubmit}
            validate={validateContact}
          >
            {contactForm}
          </Formik>
        </div>
      </div>
    </main>
  );
}
