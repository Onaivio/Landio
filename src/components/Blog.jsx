import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="blog" id="blog">
        <div className="container">
          <h2 className="h2 section-title">Latest News</h2>

          <p className="section-text">
            Et harum quidem rerum facilis est et expedita distinctio nam libero
            tempore cum soluta nobis eligendi cumque.
          </p>

          <ul className="blog-list">
            <li>
              <div className="blog-card">
                <figure className="blog-banner">
                  <img src="./blog-banner-1.jpg" alt="Best Traveling Place" />
                </figure>

                <div className="blog-meta">
                  <span>
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time datetime="2021-04-10">april 10 2021</time>
                  </span>

                  <span>
                    <ion-icon name="person-outline"></ion-icon>

                    <p>admin</p>
                  </span>
                </div>

                <h3 className="blog-title">Best Traveling Place</h3>

                <p className="blog-text">
                  Integer ante arcu accumsan a consectetuer eget posuere mauris
                  praesent adipiscing phasellus ullamcorper ipsum rutrum punc.
                </p>

                <a href="#" className="blog-link-btn">
                  <span>Learn More</span>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <figure className="blog-banner">
                  <img src="./blog-banner-2.jpg" alt="Private Meeting Room" />
                </figure>

                <div className="blog-meta">
                  <span>
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time datetime="2021-04-10">april 10 2021</time>
                  </span>

                  <span>
                    <ion-icon name="person-outline"></ion-icon>

                    <p>admin</p>
                  </span>
                </div>

                <h3 className="blog-title">Private Meeting Room</h3>

                <p className="blog-text">
                  Integer ante arcu accumsan a consectetuer eget posuere mauris
                  praesent adipiscing phasellus ullamcorper ipsum rutrum punc.
                </p>

                <a href="#" className="blog-link-btn">
                  <span>Learn More</span>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <figure className="blog-banner">
                  <img
                    src="./blog-banner-3.jpg"
                    alt="The Best Business Ideas"
                  />
                </figure>

                <div className="blog-meta">
                  <span>
                    <ion-icon name="calendar-outline"></ion-icon>

                    <time datetime="2021-04-10">april 10 2021</time>
                  </span>

                  <span>
                    <ion-icon name="person-outline"></ion-icon>

                    <p>admin</p>
                  </span>
                </div>

                <h3 className="blog-title">The Best Business Ideas</h3>

                <p className="blog-text">
                  Integer ante arcu accumsan a consectetuer eget posuere mauris
                  praesent adipiscing phasellus ullamcorper ipsum rutrum punc.
                </p>

                <a href="#" className="blog-link-btn">
                  <span>Learn More</span>

                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Blog;
