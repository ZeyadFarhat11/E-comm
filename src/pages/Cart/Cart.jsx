import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./cart.scss";
import product1 from "../../assets/img/products/product-1.png";
import product2 from "../../assets/img/products/product-7.png";
import product3 from "../../assets/img/products/product-5.png";
import ProductsTable from "../../components/CartPage/ProductsTable";
import CouponInput from "../../components/CartPage/CouponInput";
import CartTotal from "../../components/CartPage/CartTotal";
import Overlay from "../../components/Overlay/Overlay";
import PaymentModal from "../../components/PaymentModal/PaymentModal";

const PRODUCTS = [
  {
    id: 1,
    title: "Nike Air Max 270 React",
    price: 245,
    img: product1,
    quantity: 2,
  },
  {
    id: 2,
    title: "Nike Air Max 270",
    price: 185,
    img: product2,
    quantity: 3,
  },
  {
    id: 3,
    title: "Nike Air Max 270",
    price: 322,
    img: product3,
    quantity: 1,
  },
];

export default function Cart() {
  const { products, loading, loadProducts } = useCartProducts();
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
        <ProductsTable
          products={products}
          loading={loading}
          loadProducts={loadProducts}
        />
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

const useCartProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      setLoading(true);
      // TODO: Fetch Products
      await new Promise((res) => setTimeout(res, 700));
      setProducts(PRODUCTS);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return { loading, setLoading, products, setProducts, loadProducts };
};
