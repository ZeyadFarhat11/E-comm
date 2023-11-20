import { Formik } from "formik";
import React from "react";
import addAddressForm from "../../../Formik/addAddressForm";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../../components/AccountPages/Sidebar";
import "./addresses.scss";
import { validateAddAddress } from "../../../util/validators";
import { message } from "antd";

const AddAddress = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("test");
      setSubmitting(true);
      await new Promise((res) => setTimeout(res, 1000));
      message.open({ type: "success", content: "Address has been added" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main id="add-address">
      <Breadcrumb injected>
        <Link to="/account/profile">Account</Link>
        <span className="seperator">/</span>
        <Link to="/account/addresses">Addresses</Link>
        <span className="seperator">/</span>
        <span className="current">Add Address</span>
      </Breadcrumb>
      <div className="container account-page">
        <Sidebar activeLink={"Addresses"} />
        <div className="content">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              address1: "",
              address2: "",
              zipCode: "",
            }}
            onSubmit={handleSubmit}
            validate={validateAddAddress}
          >
            {addAddressForm}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default AddAddress;