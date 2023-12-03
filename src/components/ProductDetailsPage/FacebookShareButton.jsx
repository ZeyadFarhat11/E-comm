import React from "react";
import { FaFacebookF } from "react-icons/fa"; // Import the Facebook icon from react-icons
import useProductDetailsContext from "../../context/ProductDetailsContext";

const FacebookShareButton = () => {
  const { product } = useProductDetailsContext();

  const shareOnFacebook = () => {
    const productUrl = document.location.href;
    const shareText = `Check out this ${product.title} on our clothing store! ${productUrl} #Clothing #Fashion`;

    // Construct the Facebook share URL
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      productUrl
    )}&quote=${encodeURIComponent(shareText)}`;

    // Open the Facebook share dialog in a new window
    window.open(facebookShareUrl, "_blank");
  };

  return (
    <button
      style={{ backgroundColor: "#385C8E", color: "#fff" }}
      onClick={shareOnFacebook}
    >
      <FaFacebookF /> Share on Facebook
    </button>
  );
};

export default FacebookShareButton;
