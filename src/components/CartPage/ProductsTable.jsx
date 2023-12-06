import { Button } from "antd";
import useCartContext from "../../context/CartContext";
import Product from "./Product";
import ProductPlaceholder from "./ProductPlaceholder";
import { Link } from "react-router-dom";

export default function ProductsTable() {
  const { cartItems, loading } = useCartContext();

  if (!loading && !cartItems.length) {
    return (
      <div className="empty-cart">
        <h1>There is no items in your cart</h1>
        <Link to="/shop">
          <Button type="primary">Continue shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <table className="cart-products">
      <thead>
        <tr>
          <th>product</th>
          <th>price</th>
          <th>qty</th>
          <th>unit price</th>
        </tr>
      </thead>
      <tbody>
        {loading
          ? Array(3)
              .fill(0)
              .map((p, i) => <ProductPlaceholder key={i} />)
          : cartItems?.map((product) => (
              <Product key={product.id} {...product} />
            ))}
      </tbody>
    </table>
  );
}
