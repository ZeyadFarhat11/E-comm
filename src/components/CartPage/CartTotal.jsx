import useCartContext from "../../context/CartContext";
import { showUnexpectedError } from "../../util/error";
import http from "../../util/http";
import CheckoutButton from "./CheckoutButton";

export default function CartTotal({ openPaymentModal }) {
  const { couponData, setCouponData, cartItems } = useCartContext();

  const removeCoupon = async () => {
    try {
      await http.delete(`/coupon/delete_coupon/`, { sendToken: true });
      setCouponData(null);
    } catch (err) {
      showUnexpectedError();
    }
  };

  const subTotal =
    cartItems?.map((item) => +item.total_price)?.reduce((a, b) => a + b, 0) ||
    0;
  let total = subTotal;
  if (cartItems?.length) {
    total += 20;
  }
  if (couponData.code) {
    if (couponData.discount_type === "fixed" && couponData.min_total < total) {
      total -= couponData.discount_amount / 100;
    } else if (
      couponData.discount_type === "percentage" &&
      couponData.min_total < total
    ) {
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
          {couponData.code ? (
            <>
              {couponData.code} ({couponData.discount_amount / 100}
              {couponData.discount_type === "fixed" ? "$" : "%"})
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
      <CheckoutButton />
    </div>
  );
}
