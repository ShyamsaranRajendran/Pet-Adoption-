import React from "react";
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import userImg from "../assets/user-profile.png";
import { MdKeyboardArrowDown } from "react-icons/md";
const Header = () => {
  return (
    <div className="Header">
      <h3>Dashboard</h3>
      <div className="dash-search">
        <form action="">
          <span className="search-icon">
            <CiSearch />
          </span>
          <input type="text" placeholder="Search..." />
        </form>
      </div>
      <div className="lang">
        <div className="lang-logo"></div>
        <p>Eng(US)</p>
        <MdKeyboardArrowDown/>
      </div>
      <div className="dash-user">
        <span className="bell-icon">
        <FaBell />
        </span>
        <img src={userImg} alt="User Profile" />
      </div>
    </div>
  );
};

export default Header;
