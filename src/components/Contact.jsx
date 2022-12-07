import React from 'react'

const Contact = () => {
  return (
    <>
     <section className="contact" id="contact">
        <div className="container">

          <h2 className="h2 section-title">Contact Us</h2>

          <p className="section-text">
            Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis eligendi
            cumque.
          </p>

          <div className="contact-wrapper">

            <form action="" className="contact-form">

              <div className="wrapper-flex">

                <div className="input-wrapper">
                  <label for="name">Name*</label>

                  <input type="text" name="name" id="name" required placeholder="Enter Your Name" className="input-field" />
                </div>

                <div className="input-wrapper">
                  <label for="emai">Email*</label>

                  <input type="text" name="email" id="email" required placeholder="Enter Your Email"
                    className="input-field" />
                </div>

              </div>

              <label for="message">Message*</label>

              <textarea name="message" id="message" required placeholder="Type Your Message"
                className="input-field"></textarea>

              <button type="submit" className="btn btn-primary">
                <span>Send Message</span>

                <ion-icon name="paper-plane-outline"></ion-icon>
              </button>

            </form>

            <ul className="contact-list">

              <li>
                <a href="mailto:support@website.com" className="contact-link">
                  <ion-icon name="mail-outline"></ion-icon>

                  <span>: onaivio220@gmail.com</span>
                </a>
              </li>

              <li>
                <a href="#" className="contact-link">
                  <ion-icon name="globe-outline"></ion-icon>

                  <span>: www.onaivi-portfolio.vercel.app</span>
                </a>
              </li>

              <li>
                <a href="tel:+0011234567890" className="contact-link">
                  <ion-icon name="call-outline"></ion-icon>

                  <span>: (+234) 81 4690 8277</span>
                </a>
              </li>

              <li>
                <div className="contact-link">
                  <ion-icon name="time-outline"></ion-icon>

                  <span>: 9:00 AM - 6:00 PM</span>
                </div>
              </li>

              <li>
                <a href="#" className="contact-link">
                  <ion-icon name="location-outline"></ion-icon>

                  <address>: No. 64 Ahmadu Bello Way, Kano</address>
                </a>
              </li>

            </ul>

          </div>

        </div>
      </section> 
    </>
  )
}

export default Contact
