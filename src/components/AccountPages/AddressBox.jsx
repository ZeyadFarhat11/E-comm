import React from "react";

const AddressBox = ({
  firstName,
  lastName,
  phone,
  email,
  address1,
  address2,
  defaultAddress,
}) => {
  const deleteAddress = async () => {};
  const setAsDefault = async () => {};
  const editAddress = async () => {};
  return (
    <div className="address">
      <h3 className="name">
        {firstName} {lastName}
      </h3>
      <p>{phone}</p>
      <p>{email}</p>
      <b>{address1}</b>
      <b>{address2}</b>
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
