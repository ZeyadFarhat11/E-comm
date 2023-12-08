import React from "react";
import http from "../../util/http";
import { message } from "antd";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useAuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const WishlistButton = ({ product, loadData, setProduct }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const addToWishlist = async () => {
    if (!user) return navigate(`/login?redirect=${window.location.pathname}`);
    try {
      await http.post(
        "/wishlist/item/",
        { product: product.id },
        { sendToken: true }
      );
      message.open({
        type: "success",
        content: `${product.title} has been added to wishlist`,
      });

      if (setProduct) {
        setProduct({ ...product, is_in_wishlist: true });
      } else {
        loadData();
      }
    } catch (err) {
      message.open({ type: "error", content: "Error happened" });
    }
  };
  const removeFromWishlist = async () => {
    try {
      await http.delete(`/wishlist/item/${product.id}`, { sendToken: true });
      message.open({
        type: "success",
        content: `${product.title} has been removed from wishlist`,
      });

      if (setProduct) {
        setProduct({ ...product, is_in_wishlist: false });
      } else {
        loadData();
      }
    } catch (err) {
      message.open({ type: "error", content: "Error happened" });
    }
  };

  return (
    <button
      className="add-to-wishlist"
      data-active={product.is_in_wishlist}
      onClick={product.is_in_wishlist ? removeFromWishlist : addToWishlist}
    >
      {/* {product.is_in_wishlist ? <AiFillHeart /> : <AiOutlineHeart />} */}
      <AiOutlineHeart />
    </button>
  );
};

export default WishlistButton;
