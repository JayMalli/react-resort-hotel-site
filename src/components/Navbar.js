import React from "react";
import logo from ".././images/logo.svg";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { isOpenNavbar, openNavbar } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-btn" onClick={openNavbar}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={`${isOpenNavbar ? "nav-links show-nav" : "nav-links"} `}>
          <li>
            <Link to="/" onClick={openNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" onClick={openNavbar}>
              Rooms
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
