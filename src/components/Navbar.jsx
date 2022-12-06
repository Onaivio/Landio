import React from 'react'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <header class="header" data-header>
    <div class="container">

      <a href="#" class="logo">
        <img src={Logo} alt="Landio logo" />
      </a>

      <button class="menu-toggle-btn" data-nav-toggle-btn>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <nav class="navbar">
        <ul class="navbar-list">

          <li>
            <a href="#hero" class="navbar-link">Home</a>
          </li>

          <li>
            <a href="#features" class="navbar-link">Features</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Pricing</a>
          </li>

          <li>
            <a href="#blog" class="navbar-link">Blog</a>
          </li>

          <li>
            <a href="#contact" class="navbar-link">Contact Us</a>
          </li>

        </ul>

        <div class="header-actions">
          <a href="#" class="header-action-link">Log in</a>

          <a href="#" class="header-action-link">Register</a>
        </div>
      </nav>

    </div>
  </header>
  )
}

export default Navbar