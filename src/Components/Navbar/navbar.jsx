import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav>
            <Link><img src="main.png" alt="logo" className="imglogo" /></Link>

      <ul>
        <Link to="/">HOME</Link>
        <Link to="/page">PAGES</Link>
        <Link to="/property">PROPERTY</Link>
        <Link to="/blog">BLOG</Link>

        <li id="right-hand-nav">
          <Link to="/joinUs"><RiContactsLine /> JOIN US </Link>
          <Link to="/AddProperty"><FiPlus />ADD PROPERTY</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
