import { useState } from "react";

import { Rate } from "antd";
import { transparentize } from "polished";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CreateReviewModal from "../CreateReviewModal/CreateReviewModal.jsx";

import useAuthContext from "../../context/AuthContext.jsx";
import useProductDetailsContext from "../../context/ProductDetailsContext";
import CartButton from "./CartButton.jsx";
import WishlistButton from "./WishlistButton";
import XShareButton from "./XShareButton.jsx";
import FacebookShareButton from "./FacebookShareButton.jsx";
export default function ProductInfo() {
  const { setProduct, product } = useProductDetailsContext();
  const { user } = useAuthContext();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [createReviewActive, setCreateReviewActive] = useState(false);

  const oldPrice = (product.price / ((100 - product.discount) / 100)).toFixed(
    2
  );

  const increateQuantity = () => {
    if (!product.available) return;
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const hasReviewedBefore = !!product.reviews.find(
    (review) => review.customer == user?.username
  );

  return (
    <div className="product-info">
      <h3 className="title">{product.title}</h3>
      <div>
        <Rate value={product.evaluation} disabled />
        <p className="reviews">{product.reviews.length} reviews</p>
        {!hasReviewedBefore && (
          <button onClick={() => setCreateReviewActive(true)}>
            Submit a review
          </button>
        )}
        <CreateReviewModal
          active={createReviewActive}
          closeModal={() => setCreateReviewActive(false)}
          productId={product.id}
        />
      </div>
      <hr />
      <div className="price-wrapper">
        <h3 className="price">${product.price}</h3>
        <del>${oldPrice}</del>
        <span className="discount">{product.discount}% Off</span>
      </div>
      <p className="info">
        <span>Brand:</span>
        <span>{product.brand}</span>
      </p>
      <p className="info">
        <span>Availability:</span>
        <span>{product.available ? "In stock" : "Out of stock"}</span>
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
            disabled={!product.available}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <div className="wrapper">
          <CartButton
            setProduct={setProduct}
            product={product}
            quantity={quantity}
          />
          <WishlistButton setProduct={setProduct} product={product} />
        </div>
      </div>
      <hr />
      <div className="share-btns">
        <FacebookShareButton />
        <XShareButton />
      </div>
    </div>
  );
}
