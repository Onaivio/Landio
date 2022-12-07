import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer-top">
          <div class="container">
            <div class="footer-brand">
              <a href="#" class="logo">
                <img src="./logo-footer.svg" alt="Landio logo" />
              </a>

              <p class="footer-text">
                Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum
                ante ipsum primis in faucibus ultrices posuere cubilia.
              </p>

              <ul class="social-list">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100071660391192" class="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/OkomayinOnaivi" class="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/isaaccodetech/" class="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/onaivi-okomayin-732b82241/" class="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer-link-box">
              <ul class="footer-list">
                <li>
                  <p class="footer-item-title">ABOUT US</p>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Works
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Strategy
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Releases
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Press
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Mission
                  </a>
                </li>
              </ul>

              <ul class="footer-list">
                <li>
                  <p class="footer-item-title">CUSTOMERS</p>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Tranding
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Popular
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Customers
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Features
                  </a>
                </li>
              </ul>

              <ul class="footer-list">
                <li>
                  <p class="footer-item-title">SUPPORT</p>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Developers
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Support
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Customer Service
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Get Started
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p class="copyright">
              &copy; 2022 <a href="onaivi-portfolio.vercel.app">onaivio.jsx</a>. All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
