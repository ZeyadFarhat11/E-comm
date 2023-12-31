import { useState } from "react";
import http from "../../util/http";
import { Button, message } from "antd";
import useCartContext from "../../context/CartContext";

export default function CouponInput() {
  const [coupon, setCoupon] = useState("");
  const [loading, setLoading] = useState(false);
  const { loadCart } = useCartContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (coupon.length < 4) {
      return message.open({
        type: "error",
        content: "Coupon is not valid",
      });
    }

    try {
      setLoading(true);

      const res = await http.post(
        "/coupon/apply_coupon/",
        { coupon_code: coupon },
        { sendToken: true }
      );

      message.open({
        type: res.status === 200 ? "success" : "error",
        content: res.data.message,
      });

      loadCart();
    } catch (err) {
      message.open({
        type: "error",
        content: err.response.data?.message || "Coupon is not valid",
      });
      console.log(err);
    } finally {
      setCoupon("");
      setLoading(false);
    }
  };

  return (
    <form className="coupon" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Coupon code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <Button loading={loading} htmlType="submit">
        Redeem
      </Button>
    </form>
  );
}
