import React from "react";

const AboutUs = () => (
  <>
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-icon">
            <ion-icon name="cube"></ion-icon>
          </div>

          <h2 className="h2 about-title">Why Choose Us ?</h2>

          <p className="about-text">
            Nam libero tempore cum soluta as nobis est eligendi optio cumque
            nihile impedite quo minus id quod maxime.
          </p>

          <button className="btn btn-outline">Learn More</button>
        </div>

        <ul className="about-list">
          <li>
            <div className="about-card">
              <div className="card-icon">
                <ion-icon name="thumbs-up"></ion-icon>
              </div>

              <h3 className="h3 card-title">Easy To Use</h3>

              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
          </li>

          <li>
            <div className="about-card">
              <div className="card-icon">
                <ion-icon name="trending-up"></ion-icon>
              </div>

              <h3 className="h3 card-title">Grow Your Revenue</h3>

              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
          </li>

          <li>
            <div className="about-card">
              <div className="card-icon">
                <ion-icon name="shield-checkmark"></ion-icon>
              </div>

              <h3 className="h3 card-title">Analytics Security</h3>

              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
          </li>

          <li>
            <div className="about-card">
              <div className="card-icon">
                <ion-icon name="server"></ion-icon>
              </div>

              <h3 className="h3 card-title">Data Privacy</h3>

              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default AboutUs;
