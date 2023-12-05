import { Formik } from "formik";
import React from "react";
import addAddressForm from "../../formik/addAddressForm";
import Overlay from "../Overlay/Overlay";
import editAddressForm from "../../formik/editAddressForm";
import { showUnexpectedError } from "../../util/error";
import http from "../../util/http";
import { message } from "antd";

const EditAddressModal = ({
  id,
  first_name: firstName,
  last_name: lastName,
  phone,
  email,
  address1,
  address2 = "",
  default_address: defaultAddress,
  zip_code: zipCode,
  loadAddresses,
  closeModal,
}) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await http.put(
        `/shipping/${id}/`,
        {
          first_name: values.firstName,
          last_name: values.lastName,
          phone: values.phone,
          email: values.email,
          address1: values.address1,
          address2: values.address2,
          zip_code: zipCode,
          default_address: true,
        },
        { sendToken: true }
      );
      message.open({
        type: "success",
        content: "Changes have been saved.",
      });
      loadAddresses();
      closeModal();
      setSubmitting(false);
    } catch (err) {
      showUnexpectedError();
    }
  };
  return (
    <>
      <Overlay active onClick={closeModal} />
      <div className="edit-address-modal">
        <Formik
          initialValues={{
            firstName,
            lastName,
            phone,
            email,
            address1,
            address2,
            zipCode,
          }}
          onSubmit={handleSubmit}
        >
          {({ ...props }) => editAddressForm({ ...props, closeModal })}
        </Formik>
      </div>
    </>
  );
};

export default EditAddressModal;
