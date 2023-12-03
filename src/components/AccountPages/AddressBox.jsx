import React from "react";
import http from "../../util/http";
import { message } from "antd";

const AddressBox = ({
  id,
  first_name: firstName,
  last_name: lastName,
  phone,
  email,
  address1,
  address2,
  default_address: defaultAddress,
  loadAddresses,
}) => {
  const deleteAddress = async () => {
    try {
      await http.delete(`/shipping/${id}/`, { sendToken: true });
      loadAddresses();
    } catch (err) {
      message.open({
        type: "error",
        content: "Error happened! Please try again.",
      });
      console.log(err);
    }
  };
  const setAsDefault = async () => {
    try {
    } catch (err) {}
  };
  const editAddress = async () => {};
  return (
    <div className="address">
      {defaultAddress && <p className="badge">Default</p>}
      <div className="body">
        <h3 className="name">
          {firstName} {lastName}
        </h3>
        <p>{phone}</p>
        <p>{email}</p>
        <b>{address1}</b>
        {address2 ? <b>{address2}</b> : null}
      </div>
      <div className="btns">
        {defaultAddress ? (
          <button onClick={editAddress}>Edit</button>
        ) : (
          <button onClick={setAsDefault}>Set as Default</button>
        )}
        <button onClick={deleteAddress}>Delete</button>
      </div>
    </div>
  );
};

export default AddressBox;
