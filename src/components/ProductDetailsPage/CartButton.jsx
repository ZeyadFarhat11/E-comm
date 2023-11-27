import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartButton = () => {
  return (
    <button className="add-to-cart">
      <AiOutlineShoppingCart />
      Add To Cart
    </button>
  );
};

export default CartButton;
