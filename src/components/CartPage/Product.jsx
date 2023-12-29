import { message } from "antd";
import Image from "../Image.jsx";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCartContext from "../../context/CartContext";
import http from "../../util/http";
import QuantityController from "./QuantityController";
export default function Product({
  id: itemId,
  total_price: totalPrice,
  quantity,
  product: { price, image, title, id: productId },
  color,
  size,
}) {
  const { setCartItems } = useCartContext();
  const [loading, setLoading] = useState();
  const deleteProduct = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await http.delete(`/cart/cart_item/${itemId}`, { sendToken: true });
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );
    } catch (err) {
      console.log(err);
      message.open({
        type: "error",
        content: `Error removing ${title} from cart.`,
      });
    }
  };
  return (
    <tr className="product">
      <td className="info">
        <button className="delete" onClick={deleteProduct}>
          <AiOutlineCloseCircle />
        </button>
        <Image src={image} alt={title} />
        <Link to={`/product/${productId}`} className="title">
          {title} ({color} - {size})
        </Link>
      </td>
      <td>${Number(totalPrice).toFixed(2)}</td>
      <td>
        <QuantityController quantity={quantity} itemId={itemId} />
      </td>
      <td>${Number(price).toFixed(2)}</td>
    </tr>
  );
}
