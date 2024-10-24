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
      </ul>
     
    </header>
  );
};

export default Header;
