import React from "react";
import http from "../../util/http";
import { showUnexpectedError } from "../../util/error";
import { useState } from "react";
import EditAddressModal from "./EditAddressModal";

const AddressBox = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const deleteAddress = async () => {
    try {
      await http.delete(`/shipping/${id}/`, { sendToken: true });
      loadAddresses();
    } catch (err) {
      showUnexpectedError();
    }
  };
  const setAsDefault = async () => {
    try {
      await http.post(`/shipping/set/${id}/`, {}, { sendToken: true });
      loadAddresses();
    } catch (err) {
      showUnexpectedError();
    }
  };

  if (isEditing) {
    const closeModal = () => setIsEditing(false);
    return <EditAddressModal {...props} closeModal={closeModal} />;
  }

  const {
    id,
    first_name: firstName,
    last_name: lastName,
    phone,
    email,
    address1,
    address2,
    default_address: defaultAddress,
    loadAddresses,
  } = props;

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
          <button onClick={() => setIsEditing(true)}>Edit</button>
        ) : (
          <button onClick={setAsDefault}>Set as Default</button>
        )}
        <button onClick={deleteAddress}>Delete</button>
      </div>
    </div>
  );
};

export default AddressBox;
