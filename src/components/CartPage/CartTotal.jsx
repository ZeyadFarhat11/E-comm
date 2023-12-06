import useCartContext from "../../context/CartContext";

export default function CartTotal({ openPaymentModal }) {
  const { couponData, cartItems } = useCartContext();

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
      <p>
        <span>Coupon</span>
        <span>{couponData?.code || "No"}</span>
      </p>
      <hr />
      <p>
        <b>TOTAL</b>
        <b>${total.toFixed(2)}</b>
      </p>
      <button onClick={openPaymentModal}>Check out</button>
    </div>
  );
}
