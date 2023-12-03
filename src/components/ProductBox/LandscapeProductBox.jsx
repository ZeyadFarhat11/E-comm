import { Rate } from "antd";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useShopContext from "../../context/ShopContext";
import CreateReviewModal from "../CreateReviewModal/CreateReviewModal.jsx";
import WishlistButton from "../ProductDetailsPage/WishlistButton";
import "./product-box.scss";
import { Link } from "react-router-dom";
import CartButton from "../ProductDetailsPage/CartButton.jsx";

const LandscapeProductBox = ({
  label,
  title,
  reviewsCount = 15,
  price,
  discount,
  description,
  id,
  image,
  evaluation,
  is_in_wishlist,
  is_in_cart,
}) => {
  const [isCreatingReview, setIsCreatingReview] = useState(false);
  const { loadProducts } = useShopContext();

  const oldPrice = (price / ((100 - discount) / 100)).toFixed(2);

  return (
    <div className="product-landscape">
      <div className="image">
        {label ? <span className="label">{label}</span> : null}
        <img src={image} alt={title} />
      </div>
      <div className="info">
        <Link className="title" to={`/product/${id}`}>
          {title}
        </Link>
        <div>
          <Rate value={evaluation} disabled />
          <p className="reviews">{reviewsCount} reviews</p>
          {!is_in_wishlist && (
            <button onClick={() => setIsCreatingReview(true)}>
              Submit a review
            </button>
          )}
          <CreateReviewModal
            active={isCreatingReview}
            closeModal={() => setIsCreatingReview(false)}
            productId={id}
            loadData={loadProducts}
          />
        </div>
        <hr />
        <div className="price-wrapper">
          <h3 className="price">${price}</h3>
          <del>${oldPrice}</del>
          <span className="discount">{discount}% Off</span>
        </div>
        <p className="description">
          {description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </p>
        <div className="cta">
          <CartButton
            product={{ id, title, is_in_cart }}
            loadData={loadProducts}
          />
          <WishlistButton
            product={{ title, id, is_in_wishlist }}
            loadData={loadProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default LandscapeProductBox;
