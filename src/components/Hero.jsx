import React from 'react'
import HeroBanner from '../assets/images/hero-banner.png'


const Hero = () => {

  return (
    <>
     <section className="hero" id="hero">
        <div className="container">

          <div className="hero-content">
            <h1 className="h1 hero-title">Creative Landing Page</h1>

            <p className="hero-text">
              A creative & modern landing page with Landio template & We love make things amazing.
            </p>

            <p className="form-text">
              <span>🥳</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur that is fugit.
            </p>

            <form action="" className="hero-form">
              <input type="email" name="email" required placeholder="Enter Your Email" className="email-field" />

              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>

          <figure className="hero-banner">
            <img src={HeroBanner} alt="Hero image" />
          </figure>

        </div>
      </section>
    </>
  )
}

export default Hero