import useCartContext from "../../context/CartContext";
import { showUnexpectedError } from "../../util/error";
import http from "../../util/http";

export default function CartTotal({ openPaymentModal }) {
  const { couponData, setCouponData, cartItems } = useCartContext();

  const removeCoupon = async () => {
    try {
      await http.delete(`/`);
      setCouponData(null);
    } catch (err) {
      showUnexpectedError();
    }
  };

  const subTotal =
    cartItems?.map((item) => +item.total_price)?.reduce((a, b) => a + b, 0) ||
    0;
  let total = subTotal + 20;
  if (couponData) {
    if (couponData.discount_type === "F") {
      total -= couponData.discount_amount;
    } else {
      total -= (couponData.discount_amount * total) / 100;
    }
  }
  if (total < 0) total = 0;
  return (
    <div className="cart-total">
      <p>
        <span>Subtotal</span>
        <span>${subTotal.toFixed(2)}</span>
      </p>
      <p>
        <span>Shipping fee</span>
        <span>$20</span>
      </p>
      <p className="coupon">
        <span>
          Coupon
          <button className="remove-coupon" onClick={removeCoupon}>
            remove
          </button>
        </span>
        <span>
          {couponData ? (
            <>
              {couponData.code} ({couponData.discount_amount}
              {couponData.discount_type === "F" ? "$" : "%"})
            </>
          ) : (
            "No"
          )}
        </span>
      </p>
      <hr />
      <p>
        <b>TOTAL</b>
        <b>${total.toFixed(2)}</b>
      </p>
      <button onClick={openPaymentModal} className="check-out">
        Check out
      </button>
    </div>
  );
}
