import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { FaSquareXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "./checkout-status.scss";

const CheckoutStatus = ({ status = "success" }) => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        navigate("/", { replace: true });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const icon =
    status === "success" ? <IoIosCheckmarkCircle /> : <FaSquareXmark />;

  const heading =
    status === "success" ? "Thank You for Your Purchase!" : "Checkout Canceled";

  return (
    <main id="checkout-status" data-status={status}>
      <div className="icon">{icon}</div>
      <h1>{heading}</h1>
      <h4>You will be redirected to the homepage after {countdown}s</h4>
      <Link to="/" replace>
        <Button type="primary">Homepage</Button>
      </Link>
    </main>
  );
};

export default CheckoutStatus;
