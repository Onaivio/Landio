import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="./logo-footer.svg" alt="Landio logo" />
              </a>

              <p className="footer-text">
                Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum
                ante ipsum primis in faucibus ultrices posuere cubilia.
              </p>

              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100071660391192" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/OkomayinOnaivi" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/isaaccodetech/" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/onaivi-okomayin-732b82241/" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-link-box">
              <ul className="footer-list">
                <li>
                  <p className="footer-item-title">ABOUT US</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Works
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Strategy
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Releases
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Press
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Mission
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-item-title">CUSTOMERS</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Tranding
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Popular
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Customers
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Features
                  </a>
                </li>
              </ul>

              <ul className="footer-list">
                <li>
                  <p className="footer-item-title">SUPPORT</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Developers
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Support
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Customer Service
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Get Started
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="onaivi-portfolio.vercel.app">onaivio.jsx</a>. All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
