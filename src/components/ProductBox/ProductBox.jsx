import React from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import "./product-box.scss";
import { Link } from "react-router-dom";

export default function ProductBox({
  img,
  title,
  rating,
  discount,
  price,
  id,
  label,
}) {
  const oldPrice = (price / ((100 - discount) / 100)).toFixed(2);
  return (
    <div className="product-box">
      <div className="image" style={{ backgroundImage: `url("${img}")` }}>
        {/* <img src={img} alt={title} /> */}
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
        <RatingStars rating={rating} />
        <footer>
          <span className="price">${price}</span>
          <del>${oldPrice}</del>
          <span className="discount">{discount}% Off</span>
        </footer>
      </div>
    </div>
  );
}

const RatingStars = React.memo(({ rating }) => {
  let stars = [];

  let ratingTemp = rating;
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<AiFillStar />);
    ratingTemp--;
  }
  if (ratingTemp >= 0.5) stars.push(<BsStarHalf />);

  return <div className="rating-stars">{stars}</div>;
});
