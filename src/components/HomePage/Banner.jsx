import { Link } from "react-router-dom";
import img from "../../assets/img/home-banner.webp";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="text">
          <h2>Adidas Men Running Sneakers</h2>
          <p>Performance and design. Taken right to the edge.</p>
          <Link to="/shop">shop now</Link>
        </div>
        <div className="img">
          <img src={img} alt="banner" />
        </div>
      </div>
    </section>
  );
}
