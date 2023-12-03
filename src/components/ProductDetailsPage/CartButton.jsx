import { message } from "antd";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
import useCartContext from "../../context/CartContext";
import http from "../../util/http";

const CartButton = ({ product, setProduct, loadData, quantity }) => {
  const { user } = useAuthContext();
  const { loadCart, setCartItems } = useCartContext();
  const navigate = useNavigate();

  const addToCart = async () => {
    if (!user) {
      return navigate("/login");
    }

    try {
      await http.post(
        "/cart/cart_item/",
        { product: product.id, quantity },
        { sendToken: true }
      );
      message.open({
        type: "success",
        content: `Added ${product.title} to cart`,
      });

      if (setProduct) {
        setProduct((prev) => ({ ...prev, is_in_cart: true }));
      } else {
        loadData();
      }
      loadCart();
    } catch (err) {
      console.log(err);
      message.open({
        type: "error",
        content: "An error occurred while adding to cart",
      });
    }
  };
  const removeFromCart = async () => {
    try {
      await http.delete(`/cart/cart_item/delete/${product.id}/`, {
        sendToken: true,
      });
      message.open({
        type: "success",
        content: `Removed ${product.title} from cart`,
      });
      if (setProduct) {
        setProduct((prev) => ({ ...prev, is_in_cart: false }));
      } else {
        loadData();
      }
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product.id !== product.id)
      );
    } catch (err) {
      console.log(err);
      message.open({
        type: "error",
        content: "An error occurred while removing from cart",
      });
    }
  };
  return (
    <button
      className="add-to-cart"
      onClick={product.is_in_cart ? removeFromCart : addToCart}
      data-active={product.is_in_cart}
    >
      <AiOutlineShoppingCart />
      {product.is_in_cart ? "Remove From Cart" : "Add To Cart"}
    </button>
  );
};

export default CartButton;
