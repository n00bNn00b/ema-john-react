import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div>
          <a href="/shop">Shop</a>
          <a href="/orders">Orders</a>
          <a href="/inventory">Inventory</a>
          <a href="/about">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
