import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./cart.scss";

import CartTotal from "../../components/CartPage/CartTotal";
import CouponInput from "../../components/CartPage/CouponInput";
import ProductsTable from "../../components/CartPage/ProductsTable";
import Overlay from "../../components/Overlay/Overlay";
import PaymentModal from "../../components/PaymentModal/PaymentModal";

export default function Cart() {
  const [paymentModalActive, setPaymentModalActive] = useState(false);

  const openPaymentModal = () => {
    setPaymentModalActive(true);
  };
  const closePaymentModal = () => {
    setPaymentModalActive(false);
  };

  return (
    <main id="cart">
      <Breadcrumb>Cart</Breadcrumb>
      <div className="container">
        <ProductsTable />
      </div>
      <div className="container">
        <div className="cart-footer">
          <CouponInput />
          <CartTotal openPaymentModal={openPaymentModal} />
        </div>
      </div>
      <Overlay active={paymentModalActive} onClick={closePaymentModal} />
      <PaymentModal
        active={paymentModalActive}
        closeModal={closePaymentModal}
      />
    </main>
  );
}
