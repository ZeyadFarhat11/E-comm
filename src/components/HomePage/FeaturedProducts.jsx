import { Rate } from "antd";
import { Link } from "react-router-dom";
import http from "../../util/http.js";
import { useEffect, useState } from "react";
// const products = [
//   {
//     id: 1,
//     title: "Blue Swade Nike Sneakers",
//     rating: 4,
//     price: 499,
//     discount: 20,
//     img,
//   },
//   {
//     id: 2,
//     title: "Blue Swade Nike Sneakers",
//     rating: 4,
//     price: 499,
//     discount: 20,
//     img,
//   },
//   {
//     id: 3,
//     title: "Blue Swade Nike Sneakers",
//     rating: 4,
//     price: 499,
//     discount: 20,
//     img,
//   },
// ];

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const loadProducts = async () => {
    try {
      const res = await http.get("/store/products/?limit=3&sort_by=-reviews");
      setProducts(res.data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section className="featured-products">
      <h2>FEATURED PRODUCTS</h2>
      <div className="container">
        {products.map(
          (
            { id, title, price, evaluation: rating, discount, image: img },
            i
          ) => (
            <div
              className="featured-product"
              key={id}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <img src={img} alt={title} />
              <div className="text">
                <Link to={`/product/${id}`} className="title">
                  {title}
                </Link>
                <Rate allowHalf value={rating} />
                <div className="price">
                  <span>${price}</span>
                  <del>${(price / ((100 - discount) / 100)).toFixed(2)}</del>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
