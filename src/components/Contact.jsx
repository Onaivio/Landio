import React from 'react'

const Contact = () => {
  return (
    <>
     <section class="contact" id="contact">
        <div class="container">

          <h2 class="h2 section-title">Contact Us</h2>

          <p class="section-text">
            Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis eligendi
            cumque.
          </p>

          <div class="contact-wrapper">

            <form action="" class="contact-form">

              <div class="wrapper-flex">

                <div class="input-wrapper">
                  <label for="name">Name*</label>

                  <input type="text" name="name" id="name" required placeholder="Enter Your Name" class="input-field" />
                </div>

                <div class="input-wrapper">
                  <label for="emai">Email*</label>

                  <input type="text" name="email" id="email" required placeholder="Enter Your Email"
                    class="input-field" />
                </div>

              </div>

              <label for="message">Message*</label>

              <textarea name="message" id="message" required placeholder="Type Your Message"
                class="input-field"></textarea>

              <button type="submit" class="btn btn-primary">
                <span>Send Message</span>

                <ion-icon name="paper-plane-outline"></ion-icon>
              </button>

            </form>

            <ul class="contact-list">

              <li>
                <a href="mailto:support@website.com" class="contact-link">
                  <ion-icon name="mail-outline"></ion-icon>

                  <span>: support@website.com</span>
                </a>
              </li>

              <li>
                <a href="#" class="contact-link">
                  <ion-icon name="globe-outline"></ion-icon>

                  <span>: www.website.com</span>
                </a>
              </li>

              <li>
                <a href="tel:+0011234567890" class="contact-link">
                  <ion-icon name="call-outline"></ion-icon>

                  <span>: (+001) 123 456 7890</span>
                </a>
              </li>

              <li>
                <div class="contact-link">
                  <ion-icon name="time-outline"></ion-icon>

                  <span>: 9:00 AM - 6:00 PM</span>
                </div>
              </li>

              <li>
                <a href="#" class="contact-link">
                  <ion-icon name="location-outline"></ion-icon>

                  <address>: 1644 Deer Ridge Drive Rochelle Park, NJ 07662</address>
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
