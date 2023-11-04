import React from "react";
import img from "../../assets/img/featured-product.png";
import ProductBox from "../ProductBox/ProductBox";

const products = [
  {
    id: 1,
    title: "Blue Swade Nike Sneakers",
    rating: 4,
    price: 499,
    discount: 20,
    img,
  },
  {
    id: 2,
    title: "Blue Swade Nike Sneakers",
    rating: 4,
    price: 499,
    discount: 20,
    img,
  },
  {
    id: 3,
    title: "Blue Swade Nike Sneakers",
    rating: 4,
    price: 499,
    discount: 20,
    img,
  },
  {
    id: 4,
    title: "Blue Swade Nike Sneakers",
    rating: 4,
    price: 499,
    discount: 20,
    img,
  },
];

function RelatedProducts() {
  return (
    <section className="related-products">
      <h2>RELATED PRODUCTS</h2>
      <div className="container products-grid">
        {products.map((product) => (
          <ProductBox {...product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
