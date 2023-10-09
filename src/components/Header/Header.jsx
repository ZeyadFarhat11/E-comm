import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import "./header.scss";
import { useState } from "react";
export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive((prev) => !prev);

  return (
    <header id="header">
      <div className="top">
        <div className="container">
          <div className="wrapper left">
            <select>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
            <select>
              <option value="usd">USD</option>
              <option value="egp">EGP</option>
              <option value="eur">EUR</option>
            </select>
          </div>
          <div className="wrapper right">
            <Link className="profile" to="/profile">
              <AiOutlineUser />
              <span>My Profile</span>
            </Link>
            <Link className="cart" to="/cart">
              <FiShoppingCart />
              <span className="items-count">3</span>
              <span>My Cart</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <nav data-active={menuActive}>
            <NavLink to="/">home</NavLink>
            <NavLink to="/bags">bags</NavLink>
            <NavLink to="/sneakers">sneakers</NavLink>
            <NavLink to="/belt">belt</NavLink>
            <NavLink to="/contact">contact</NavLink>
          </nav>
          <button className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
}
