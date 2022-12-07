import React from "react";

const Feature = () => {
  return (
    <>
      <section className="features" id="features">
        <div className="container">
          <h2 className="h2 section-title">Awesome Features</h2>

          <p className="section-text">
            Et harum quidem rerum facilis est et expedita distinctio nam libero
            tempore cum soluta nobis eligendi cumque.
          </p>

          <div className="features-wrapper">
            <figure className="features-banner">
              <img src="./features-img-1.png" alt="illustration art" />
            </figure>

            <div className="features-content">
              <p className="features-content-subtitle">
                <ion-icon name="sparkles"></ion-icon>

                <span>CREATIVE FEATURES</span>
              </p>

              <h3 className="features-content-title">
                Build <strong>community</strong> & <strong>conversion</strong>{" "}
                with our suite of <strong>social tool</strong>
              </h3>

              <p className="features-content-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum a
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                molestiae non recusandae itaque.
              </p>

              <ul className="features-list">
                <li className="features-list-item">
                  <ion-icon name="layers-outline"></ion-icon>

                  <p>Donec pede justo fringilla vel nec.</p>
                </li>

                <li className="features-list-item">
                  <ion-icon name="megaphone-outline"></ion-icon>

                  <p>Cras ultricies mi eu turpis hendrerit fringilla.</p>
                </li>
              </ul>

              <div className="btn-group">
                <button className="btn btn-primary">Read More</button>

                <button className="btn btn-secondary">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="features-wrapper">
            <figure className="features-banner">
              <img src="./features-img-2.png" alt="illustration art" />
            </figure>

            <div className="features-content">
              <p className="features-content-subtitle">
                <ion-icon name="sparkles"></ion-icon>

                <span>CREATIVE FEATURES</span>
              </p>

              <h3 className="features-content-title">
                We do the work you <strong>stay focused</strong> on{" "}
                <strong>your customers.</strong>
              </h3>

              <p className="features-content-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum a
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                molestiae non recusandae itaque.
              </p>

              <ul className="features-list">
                <li className="features-list-item">
                  <ion-icon name="rocket-outline"></ion-icon>

                  <p>Donec pede justo fringilla vel nec.</p>
                </li>

                <li className="features-list-item">
                  <ion-icon name="wifi-outline"></ion-icon>

                  <p>Cras ultricies mi eu turpis hendrerit fringilla.</p>
                </li>
              </ul>

              <div className="btn-group">
                <button className="btn btn-primary">Read More</button>

                <button className="btn btn-secondary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
