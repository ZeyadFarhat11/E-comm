import "./footer.scss";
import logo from "../../assets/img/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import paymentMethods from "../../assets/img/payment-methods.png";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="container top">
        <div className="wrapper">
          <img src={logo} alt="logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div className="wrapper">
          <h3>Follow Us</h3>
          <p>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="social">
            <a href="#" style={{ color: "#385C8E" }}>
              <FaFacebookF />
            </a>
            <a href="#" style={{ color: "#03A9F4" }}>
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="wrapper">
          <h3>Contact Us</h3>
          <p>
            E-Comm , 4578
            <br />
            Marmora Road,
            <br />
            Glasgow D04 89GR
          </p>
        </div>
      </div>
      <div className="container middle">
        <div className="wrapper">
          <h3>Infomation</h3>
          <button>About Us</button>
          <button>Infomation</button>
          <button>Privacy Policy</button>
          <button>Terms & Conditions</button>
        </div>
        <div className="wrapper">
          <h3>Service</h3>
          <button>About Us</button>
          <button>Infomation</button>
          <button>Privacy Policy</button>
          <button>Terms & Conditions</button>
        </div>
        <div className="wrapper">
          <h3>My Account</h3>
          <Link to="/account/profile">profile</Link>
          <Link to="/account/orders">orders</Link>
          <Link to="/account/payment-methods">payment methods</Link>
          <Link to="/account/addresses">addresses</Link>
        </div>
        <div className="wrapper">
          <h3>Our Offers</h3>
          <button>About Us</button>
          <button>Infomation</button>
          <button>Privacy Policy</button>
          <button>Terms & Conditions</button>
        </div>
      </div>
      <div className="container bottom">
        <hr />
        <div>
          <p>© 2023 Ecommerce Developed By Zeyad Farhat & Mahmoud Orabi</p>
          <img src={paymentMethods} alt="payment methdos" />
        </div>
      </div>
    </footer>
  );
}
