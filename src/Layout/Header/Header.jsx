import { Select } from "antd";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FiLogIn, FiShoppingCart, FiUserPlus } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import useAuthContext from "../../context/AuthContext";
import "./header.scss";
export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const { user } = useAuthContext();

  const toggleMenu = () => setMenuActive((prev) => !prev);

  const langOptions = [
    { label: "EN", value: "en" },
    { label: "AR", value: "ar" },
  ];

  const currencyOptions = [
    { label: "USD", value: "usd" },
    { label: "EUR", value: "eur" },
    { label: "EGP", value: "egp" },
  ];

  let authBasedContent;
  if (user) {
    authBasedContent = (
      <Link className="profile" to="/account/profile">
        <AiOutlineUser />
        <span>My Profile</span>
      </Link>
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
          <div className="wrapper right">
            <Link className="cart" to="/cart">
              <FiShoppingCart />
              <span className="items-count">3</span>
              <span>My Cart</span>
            </Link>
            {authBasedContent}
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
            <NavLink to="/shop">shop</NavLink>
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
