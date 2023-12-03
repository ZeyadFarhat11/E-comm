import { message } from "antd";
import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import addAddressForm from "../../../formik/addAddressForm";
import Sidebar from "../../../components/AccountPages/Sidebar";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { validateAddAddress } from "../../../util/validators";
import "./addresses.scss";
import http from "../../../util/http";

const AddAddress = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await http.post(
        "/shipping/",
        {
          first_name: values.firstName,
          last_name: values.lastName,
          phone: values.phone,
          email: values.email,
          address1: values.address1,
          address2: values.address2,
          zip_code: values.zipCode,
          default_address: false,
        },
        { sendToken: true }
      );
      message.open({ type: "success", content: "Address has been added" });
      navigate("/account/addresses");
    } catch (err) {
      message.open({ type: "error", content: "Error addding your address" });
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
