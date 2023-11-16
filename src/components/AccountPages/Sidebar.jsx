import React from "react";
import { Link } from "react-router-dom";

const links = [
  { text: "Profile", path: "/account/profile" },
  { text: "Orders", path: "/account/orders" },
  { text: "Addresses", path: "/account/addresses" },
  { text: "Payment Methods", path: "/account/payment-methods" },
];

function Sidebar({ activeLink }) {
  return (
    <aside className="account-sidebar">
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.path}
          data-active={activeLink === link.text}
        >
          {link.text}
        </Link>
      ))}
    </aside>
  );
}

export default Sidebar;
