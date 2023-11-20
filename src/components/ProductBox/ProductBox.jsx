import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "./product-box.scss";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import { Skeleton } from "@chakra-ui/react";

export default function ProductBox({
  image,
  title,
  rating,
  discount,
  price,
  id,
  label,
  animated,
}) {
  const oldPrice = (price / ((100 - discount) / 100)).toFixed(2);
  const animationProps = animated ? { "data-aos": "fade-up" } : {};
  return (
    <div className="product-box" {...animationProps}>
      <div className="image" style={{ backgroundImage: `url("${image}")` }}>
        <div className="item-hover">
          <button title="add to wishlist">
            <AiOutlineHeart />
          </button>
          <button title="add to cart">
            <AiOutlineShoppingCart />
          </button>
        </div>
        {!!label && <span className="label">{label}</span>}
      </div>
      <div className="text">
        <Link className="title" to={`/product/${id}`}>
          {title}
        </Link>

        <Rate value={rating} disabled allowHalf />
        <footer>
          <span className="price">${price}</span>
          <del>${oldPrice}</del>
          <span className="discount">{discount}% Off</span>
        </footer>
      </div>
    </div>
  );
}

ProductBox.Placeholder = () => {
  return (
    <div className="product-placeholder" style={{ aspectRatio: "1 / 1.55" }}>
      <Skeleton width="100%" height="100%" rounded={10} />
    </div>
  );
};
