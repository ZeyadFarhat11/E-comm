import React from "react";
import http from "../../util/http";
import { message } from "antd";
import { AiOutlineHeart } from "react-icons/ai";

const WishlistButton = ({ product, loadData, setProduct }) => {
  const addToWishlist = async () => {
    try {
      await http.post(
        "/store/wishlists/",
        { product: product.id },
        { sendToken: true }
      );
      message.open({
        type: "success",
        content: `${product.title} has been added to wishlist`,
      });

      if (setProduct) {
        setProduct((prev) => ({ ...prev, is_in_wishlist: true }));
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
      onClick={addToWishlist}
    >
      <AiOutlineHeart />
    </button>
  );
};

export default WishlistButton;
