import { Skeleton } from "@chakra-ui/react";
import { Rate } from "antd";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import WishlistButton from "../ProductDetailsPage/WishlistButton";
import "./product-box.scss";
import CartButton from "../ProductDetailsPage/CartButton";

export default function ProductBox({ setProducts, animated, product }) {
  const { id, image, title, evaluation, discount, price, label } = product;

  const oldPrice = (price / ((100 - discount) / 100)).toFixed(2);
  const animationProps = animated ? { "data-aos": "fade-up" } : {};

  const updateProduct = (newProduct) =>
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === id ? newProduct : product
      );
    });

  return (
    <div className="product-box" {...animationProps}>
      <div className="image" style={{ backgroundImage: `url(${image})` }}>
        <div className="item-hover">
          <WishlistButton product={product} setProduct={updateProduct} />
          <CartButton product={product} setProduct={updateProduct} mini />
        </div>
        {!!label && <span className="label">{label}</span>}
      </div>
      <div className="text">
        <Link className="title" to={`/product/${id}`}>
          {title}
        </Link>

        <Rate value={evaluation} disabled allowHalf />
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
