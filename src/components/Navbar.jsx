import React from "react";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src={Logo} alt="Landio logo" />
        </a>

        <button className="menu-toggle-btn" data-nav-toggle-btn>
          <ion-icon name="menu-outline">menu</ion-icon>
        </button>

        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <a href="#hero" className="navbar-link">
                Home
              </a>
            </li>

            <li>
              <a href="#features" className="navbar-link">
                Features
              </a>
            </li>

            <li>
              <a href="#pricing" className="navbar-link">
                Pricing
              </a>
            </li>

            <li>
              <a href="#blog" className="navbar-link">
                Blog
              </a>
            </li>

            <li>
              <a href="#contact" className="navbar-link">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="header-actions">
            <a href="#login" className="header-action-link">
              Log in
            </a>

            <a href="#register" className="header-action-link">
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
