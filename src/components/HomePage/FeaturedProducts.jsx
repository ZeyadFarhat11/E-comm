import img from "../../assets/img/featured-product.png";
import RatingStars from "../RatingStars.jsx";
import { Link } from "react-router-dom";
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
];

export default function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>FEATURED PRODUCTS</h2>
      <div className="container">
        {products.map(({ id, title, price, rating, discount, img }) => (
          <div className="featured-product" key={id}>
            <img src={img} alt={title} />
            <div className="text">
              <Link to={`/product/${id}`} className="title">
                {title}
              </Link>
              <RatingStars rating={rating} />
              <div className="price">
                <span>${price}</span>
                <del>${price / ((100 - discount) / 100)}</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
