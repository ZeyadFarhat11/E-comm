import React, { useEffect, useLayoutEffect, useRef } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Submenu = ({ setMenuActive, menuActive, handleLogout }) => {
  const location = useLocation();
  const menuRef = useRef();

  useEffect(() => {
    setMenuActive(false);
  }, [location]);

  useEffect(() => {
    const handler = (e) => {
      const btn = document.querySelector("button.profile");

      if (btn.isSameNode(e.target) || btn.contains(e.target)) return;
      if (
        menuRef.current.dataset.active &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuActive(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div
      className="profile-dropdown"
      data-active={menuActive}
      onClick={() => setMenuActive(false)}
      ref={menuRef}
    >
      <Link to="/account/profile">Profile</Link>
      <Link to="/account/orders">Orders</Link>
      <Link to="/account/addresses">Addresses</Link>
      <Link to="/account/wishlist">Wishlist</Link>
      <button onClick={handleLogout} className="logout">
        logout
      </button>
    </div>
  );
};

Submenu.Button = ({ children, setMenuActive }) => {
  return (
    <button
      onClick={() => {
        setMenuActive((p) => !p);
      }}
      className="profile"
      to="/account/profile"
      style={{ textDecoration: "none" }}
    >
      <AiOutlineUser />
      <span>My Profile</span>
      <FaAngleDown style={{ fontSize: "14px" }} />
      {children}
    </button>
  );
};

export default Submenu;
