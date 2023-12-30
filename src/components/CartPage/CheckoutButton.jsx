import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
import { showError, showUnexpectedError } from "../../util/error";
import http from "../../util/http";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const createCheckoutSession = async () => {
    if (!user) navigate("/login");
    setLoading(true);
    try {
      const res = await http.get("/checkout/", { sendToken: true });

      const url = res.data.checkout_url;
      window.location.href = url;
    } catch (err) {
      if (err.response?.data?.message === "Select default address.") {
        showError("You must have default address to checkout!");
      } else if (err.response?.data?.message) {
        showError(err.response?.data?.message);
      } else {
        showUnexpectedError();
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      className="check-out"
      loading={loading}
      onClick={createCheckoutSession}
    >
      Check out
    </Button>
  );
};

export default CheckoutButton;
