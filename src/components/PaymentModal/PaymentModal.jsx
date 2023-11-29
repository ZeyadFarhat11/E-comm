import { useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./payment-modal.scss";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { Button } from "antd";
import useResponsiveFontSize from "../../hooks/useResponsiveFontSize";

export default function PaymentModal({ active, closeModal }) {
  const [ErrorMessage, setErrorMessage] = useState();
  const options = useOptions();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  if (!active) return;

  return (
    <div className="payment-modal">
      <header>
        <button onClick={closeModal} className="close">
          <AiOutlineClose />
        </button>
      </header>
      <h2>Make Payment</h2>
      <Elements stripe={stripePromise} options={options}>
        <form onSubmit={handleSubmit}>
          <CardElement options={options} />
        </form>
      </Elements>
      <Button htmlType="submit">Checkout</Button>
    </div>
  );
}

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {},
};

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: `"Poppins", sans-serif`,
          "::placeholder": {
            color: "#aab7c4",
          },
          backgroundColor: "#fff",
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};
