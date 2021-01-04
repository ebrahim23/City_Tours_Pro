import React from "react";
import "./Navbar.scss";
import Logo from "../../logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img width="60px" src={Logo} alt="City Tours" />
      </div>
      <ul className="links">
        <li>
          <a href="!#">Home</a>
        </li>
        <li>
          <a href="!#">About Us</a>
        </li>
        <li>
          <a href="!#" className="active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
