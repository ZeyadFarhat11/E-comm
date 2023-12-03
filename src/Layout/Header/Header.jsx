import { Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FiLogIn, FiShoppingCart, FiUserPlus } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import useAuthContext from "../../context/AuthContext";
import "./header.scss";
import useCartContext from "../../context/CartContext";

const langOptions = [
  { label: "EN", value: "en" },
  { label: "AR", value: "ar" },
];

const currencyOptions = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
  { label: "EGP", value: "egp" },
];

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [profileDropDownActive, setProfileDropDownActive] = useState(false);
  const { user, logout } = useAuthContext();
  const { cartItems } = useCartContext();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuActive((prev) => !prev);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  let authBasedContent;
  if (user) {
    authBasedContent = (
      <>
        <Link className="cart" to="/cart">
          <FiShoppingCart />
          {!!cartItems && (
            <span className="items-count">{cartItems?.length}</span>
          )}
          <span>My Cart</span>
        </Link>
        <div className="profile">
          <button
            onClick={() => {
              setProfileDropDownActive((p) => !p);
            }}
            className="profile"
            to="/account/profile"
            style={{ textDecoration: "none" }}
          >
            <AiOutlineUser />
            <span>My Profile</span>
            <FaAngleDown style={{ fontSize: "14px" }} />
          </button>
          <div
            className="profile-dropdown"
            data-active={profileDropDownActive}
            onClick={() => setProfileDropDownActive(false)}
          >
            <Link to="/account/profile">Profile</Link>
            <Link to="/account/orders">Orders</Link>
            <Link to="/account/addresses">Addresses</Link>
            <Link to="/account/payment-methods">Payment methods</Link>
            <button onClick={handleLogout} className="logout">
              logout
            </button>
          </div>
        </div>
      </>
    );
  } else {
    authBasedContent = (
      <>
        <Link to="/login">
          <FiLogIn />
          <span>Login</span>
        </Link>
        <Link to="/register">
          <FiUserPlus />
          <span>Register</span>
        </Link>
      </>
    );
  }

  return (
    <header id="header">
      <div className="top">
        <div className="container">
          <div className="wrapper left">
            <Select options={langOptions} defaultValue={"en"} />
            <Select options={currencyOptions} defaultValue={"usd"} />
          </div>
          <div className="wrapper right">{authBasedContent}</div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <Link className="logo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <nav data-active={menuActive}>
            <NavLink to="/">home</NavLink>
            <NavLink to="/shop">shop</NavLink>
            <Link to="/shop?category=Shoes">shoes</Link>
            <Link to="/shop?category=Belts">belts</Link>
            <Link to="/shop?category=Bags">bags</Link>
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
