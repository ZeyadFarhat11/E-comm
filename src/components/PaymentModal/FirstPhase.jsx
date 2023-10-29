import { Formik } from "formik";
import { Checkbox } from "antd";
import { AiOutlineCreditCard, AiOutlineBank } from "react-icons/ai";
import { FaPaypal } from "react-icons/fa";
import { useState } from "react";
export default function FirstPhase() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  console.log(paymentMethod);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        mobile: "",
      }}
    >
      {({ errors, touched, handleChange, isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="first-phase">
          <div className="wrapper">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Address for Delivery"
              name="address"
              onChange={handleChange}
            />
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
            <input
              type="tel"
              placeholder="Mobile Phone"
              name="mobile"
              onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Go to Payment
          </button>
        </form>
      )}
    </Formik>
  );
}
