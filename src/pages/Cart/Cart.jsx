import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./cart.scss";

import CartTotal from "../../components/CartPage/CartTotal";
import CouponInput from "../../components/CartPage/CouponInput";
import ProductsTable from "../../components/CartPage/ProductsTable";
import useAuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Cart() {
  const { user } = useAuthContext();

  return (
    <main id="cart">
      <Breadcrumb>Cart</Breadcrumb>
      <div className="container">
        <ProductsTable />
      </div>
      <div className="container">
        <div className="cart-footer">
          <CouponInput />
          <CartTotal />
        </div>
      </div>
    </main>
  );
}
