import { Link } from "react-router-dom";

export default function CartTotal() {
  return (
    <div className="cart-total">
      <p>
        <span>Subtotal</span>
        <span>$998</span>
      </p>
      <p>
        <span>Shipping fee</span>
        <span>$20</span>
      </p>
      <p>
        <span>Coupon</span>
        <span>No</span>
      </p>
      <hr />
      <p>
        <b>TOTAL</b>
        <b>$118</b>
      </p>
      <Link to="/check-out">Check out</Link>
    </div>
  );
}
