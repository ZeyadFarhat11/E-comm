import useCartContext from "../../context/CartContext";
import Product from "./Product";
import ProductPlaceholder from "./ProductPlaceholder";

export default function ProductsTable() {
  const { cartItems, loading } = useCartContext();
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
