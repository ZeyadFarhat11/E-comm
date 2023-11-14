import img1 from "../../assets/img/products/floating-product-1.webp";
import img2 from "../../assets/img/products/floating-product-2.png";
import img3 from "../../assets/img/products/floating-product-3.png";
const products = [
  {
    title: "FS - QUILTED MAXI CROSS BAG",
    price: 299.43,
    discount: 24,
    img: img1,
  },
  {
    title: "FS - Nike Air Max 270 React...",
    price: 299.43,
    discount: 24,
    img: img2,
  },
  {
    title: "FS - Nike Air Max 270 React...",
    price: 299.43,
    discount: 24,
    img: img3,
  },
];

export default function FloatingProducts() {
  return (
    <div className="floating-products">
      <div className="container">
        {products.map(({ title, price, discount, img }, i) => {
          let oldPrice = 530.45;
          return (
            <div
              className="product"
              data-aos="fade-up"
              data-aos-delay={i * 200 + 1000}
              style={{ backgroundImage: `url("${img}")` }}
              key={i}
            >
              <header>
                <h3>{title}</h3>
                <span className="price">${price}</span>
              </header>
              <p className="discount">
                <del>${oldPrice}</del>
                <span>{discount}% Off</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
