import React from 'react'
import HeroBanner from '../assets/images/hero-banner.png'


const Hero = () => {

  return (
    <>
     <section class="hero" id="hero">
        <div class="container">

          <div class="hero-content">
            <h1 class="h1 hero-title">Creative Landing Page</h1>

            <p class="hero-text">
              A creative & modern landing page with Landio template & We love make things amazing.
            </p>

            <p class="form-text">
              <span>🥳</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur that is fugit.
            </p>

            <form action="" class="hero-form">
              {/* <input type="email" name="email" required placeholder="Enter Your Email" class="email-field" /> */}

              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>

          <figure class="hero-banner">
            <img src={HeroBanner} alt="Hero image" />
          </figure>

        </div>
      </section>
    </>
  )
}

export default Hero