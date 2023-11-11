import { useState } from "react";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { transparentize } from "polished";
import { Rate } from "antd";
import CreateReviewModal from "./CreateReviewModal";
export default function ProductInfo({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [createReviewActive, setCreateReviewActive] = useState(false);
  const oldPrice = (145).toFixed(2);

  const increateQuantity = () => {
    if (quantity >= product.available) return;
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="product-info">
      <h3 className="title">{product.title}</h3>
      <div>
        <Rate value={product.rating} disabled />
        <p className="reviews">{product.reviewsCount} reviews</p>
        <button onClick={() => setCreateReviewActive(true)}>
          Submit a review
        </button>
        <CreateReviewModal
          active={createReviewActive}
          closeModal={() => setCreateReviewActive(false)}
        />
      </div>
      <hr />
      <div className="price-wrapper">
        <h3 className="price">${product.price.toFixed(2)}</h3>
        <del>${oldPrice}</del>
        <span className="discount">{product.discount}% Off</span>
      </div>
      <p className="info">
        <span>Availability:</span>
        <span>{product.available > 0 ? "In stock" : "Out of stock"}</span>
      </p>
      <p className="info">
        <span>Category:</span> <span>{product.category}</span>
      </p>
      <p className="info">
        <span>Free shipping:</span>{" "}
        <span>{product.freeShipping ? "Yes" : "No"}</span>
      </p>
      <hr />
      <div className="info select-color">
        <span>Select Color:</span>
        <div className="colors">
          {product.colors.map((color) => (
            <button
              className="color"
              key={color}
              data-active={selectedColor === color}
              style={{
                backgroundColor: color,
                outlineColor: transparentize(0.65, color),
              }}
              onClick={() => setSelectedColor(color)}
            ></button>
          ))}
        </div>
      </div>
      <div className="info select-size">
        <span>Size:</span>
        <select
          onChange={(e) => setSelectedSize(e.target.value)}
          value={selectedSize}
        >
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div className="actions">
        <div className="qty-control">
          <button className="decrease" onClick={decreaseQuantity}>
            <AiOutlineMinus />
          </button>
          <span className="qty">{quantity}</span>
          <button
            className="increase"
            onClick={increateQuantity}
            disabled={quantity >= product.available}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <div className="wrapper">
          <button className="add-to-cart">
            <AiOutlineShoppingCart />
            Add To Cart
          </button>
          <button className="add-to-wishlist">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
      <hr />
      <div className="share-btns">
        <button style={{ backgroundColor: "#385C8E" }}>
          <FaFacebookF /> Share on Facebook
        </button>
        <button style={{ backgroundColor: "#000" }}>
          <FaXTwitter /> Share on X
        </button>
      </div>
    </div>
  );
}
