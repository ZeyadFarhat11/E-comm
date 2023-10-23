import { useState } from "react";

export default function CouponInput() {
  const [coupon, setCoupon] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      // TODO: Send coupon request
    } catch (err) {
      console.log(err);
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
      <button type="submit" disabled={loading}>
        Redeem
      </button>
    </form>
  );
}
