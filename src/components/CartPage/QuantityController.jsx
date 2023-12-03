import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import http from "../../util/http";
import useCartContext from "../../context/CartContext";

const QuantityController = ({ quantity, itemId }) => {
  const { setCartItems } = useCartContext();
  const change = async (type) => {
    if (type === "decrease" && quantity <= 1) return;

    try {
      const res = await http.patch(
        `/cart/cart_item/${itemId}/`,
        {
          quantity: type === "increase" ? quantity + 1 : quantity - 1,
        },
        { sendToken: true }
      );
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === itemId ? res.data : item))
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="qty-control">
      <button className="decrease" onClick={() => change("decrease")}>
        <AiOutlineMinus />
      </button>
      <span className="qty">{quantity}</span>
      <button className="increase" onClick={() => change("increase")}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default QuantityController;
