import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="Header-Title">
        Pet <span>Zen</span>
      </div>
      <ul className="header-bars">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pets">Pets</Link>
        </li>
        <li>
          <Link to="/services">Service</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <div className="header-btns">
        <button className="header-login-btn">Login</button>
        <button className="header-signin-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
