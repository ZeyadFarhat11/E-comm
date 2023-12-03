import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import useProductDetailsContext from "../../context/ProductDetailsContext";

const XShareButton = () => {
  const { product } = useProductDetailsContext();
  const shareOnX = () => {
    const productUrl = document.location.href;
    const tweetText = `Check out this ${product.title} on our clothing store! ${productUrl} #Clothing #Fashion`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;

    window.open(tweetUrl, "_blank");
  };
  return (
    <button style={{ backgroundColor: "#000" }} onClick={shareOnX}>
      <FaXTwitter /> Share on X
    </button>
  );
};

export default XShareButton;
