import React from 'react'
import Group from "../assets/Group.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Portion1">
        <div className="FooterTitle">
          <img src={Group} alt="" className="iconpawns" />
          <p>Pet Dabang</p>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          expedita. Corrupti laudantium itaque sunt dolore quas.{" "}
        </p>
        <div className="SocialLinks">
          <FaFacebook className="social" />
          <FaInstagram className="social" />
          <FaTwitter className="social" />
          <RiTwitterXFill className="social" />
        </div>
      </div>
      <div className="second">
        <li>Company </li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Gift Cards</li>
        <li>Careers</li>
      </div>
      <div className="second">
        <li>Useful Links</li>
        <li>New products</li>
        <li>Best sellers</li>
        <li>Discount</li>
        <li>F.A.Q</li>
      </div>
      <div className="second">
        <li>Store</li> 
        <li>8592 Fairground St. Tallahassee</li>
        <li> FL 32303 +775 378-6348</li>
        <li>rgarton@outlook.com</li>
      </div>
    </div>
  );
}

export default Footer