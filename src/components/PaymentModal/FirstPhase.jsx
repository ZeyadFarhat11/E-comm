import { Formik } from "formik";
import { Checkbox } from "antd";
import { AiOutlineCreditCard, AiOutlineBank } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa";
import { useState } from "react";
export default function FirstPhase({ nextPhase, setPaymentData }) {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const validateValues = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.trim().length < 3) {
      errors.firstName = "Must be at least 3 characters.";
    } else if (values.firstName.trim().length > 32) {
      errors.firstName = "Cannot exceed 32 characters.";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.trim().length < 3) {
      errors.lastName = "Must be at least 3 characters.";
    } else if (values.lastName.trim().length > 32) {
      errors.lastName = "Cannot exceed 32 characters.";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.mobile) {
      errors.mobile = "Required";
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setPaymentData(values);
    nextPhase();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        mobile: "",
      }}
      validate={validateValues}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, handleChange, isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="first-phase">
          <div className="wrapper">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
              />
              {errors.firstName && touched.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
              />
              {errors.lastName && touched.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Address for Delivery"
                name="address"
                onChange={handleChange}
              />
              {errors.address && touched.address && (
                <p className="error">{errors.address}</p>
              )}
            </div>
            <div className="payment-methods">
              <h3>Select Method Of Payment</h3>
              <div
                className="payment-method"
                data-active={paymentMethod === "card"}
              >
                <div className="info">
                  <AiOutlineCreditCard />
                  Credit Card Or Debit
                </div>
                <Checkbox
                  onChange={(e) => e.target.checked && setPaymentMethod("card")}
                  checked={paymentMethod === "card"}
                />
              </div>
              <div
                className="payment-method"
                data-active={paymentMethod === "paypal"}
              >
                <div className="info">
                  <FaPaypal />
                  Paypal
                </div>
                <Checkbox
                  onChange={(e) =>
                    e.target.checked && setPaymentMethod("paypal")
                  }
                  checked={paymentMethod === "paypal"}
                />
              </div>
              <div
                className="payment-method"
                data-active={paymentMethod === "bank"}
              >
                <div className="info">
                  <AiOutlineBank />
                  Bank Transfer
                </div>
                <Checkbox
                  onChange={(e) => e.target.checked && setPaymentMethod("bank")}
                  checked={paymentMethod === "bank"}
                />
              </div>
            </div>
            <div className="input-wrapper">
              <input
                type="tel"
                placeholder="Mobile Phone"
                name="mobile"
                onChange={handleChange}
              />
              {errors.mobile && touched.mobile && (
                <p className="error">{errors.mobile}</p>
              )}
            </div>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Go to Payment
          </button>
        </form>
      )}
    </Formik>
  );
}
