import React from "react";
import visa from "../../assets/img/visa.png";
import mastercard from "../../assets/img/mastercard.png";
const PaymentMethodBox = ({ type, id, lastDigits, name }) => {
  const deletePaymentMethod = async () => {};
  const editPaymentMethod = async () => {};
  return (
    <div className="payment-method">
      <div className="body">
        <div className="img">
          <img src={type === "visa" ? visa : mastercard} alt={type} />
        </div>
        <div className="text">
          <h3>{type}</h3>
          <h4 className="name">{name}</h4>
          <p>Credit card ending in •••• {lastDigits}</p>
        </div>
      </div>
      <div className="cta">
        <button onClick={editPaymentMethod}>Edit</button>
        <button onClick={deletePaymentMethod}>Delete</button>
      </div>
    </div>
  );
};

export default PaymentMethodBox;
