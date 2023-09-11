import React from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../components";

import images from "../constants/images";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <article>
          {/* #HERO */}

          <section className="section hero" id="home" aria-label="hero">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">
                  Building Digital <span className="has-before"> Website</span>,
                  Content and Marketing
                </h1>

                <p className="hero-text">
                  Sikharthy Infotech Pvt. Ltd. is a Kolkata-based company
                  offering web development, software development, website
                  design, content development, and digital marketing services.
                </p>

                <div className="wrapper">
                  <Link
                    to="/contact"
                    className="btn btn-primary has-before has-after"
                  >
                    How It Works
                  </Link>

                  <button className="hero-btn" aria-label="sikharthy promo">
                    <ion-icon name="play-outline" aria-hidden="true"></ion-icon>

                    <span className="span">Behind the scenes</span>
                  </button>
                </div>

                <ul className="social-list">
                  <li>
                    <Link
                      to="https://www.facebook.com/sikharthyinfotech/"
                      target="_blank"
                      className="social-link"
                      style={{ "--color": "hsl(241, 77%, 63%)" }}
                    >
                      <ion-icon name="logo-facebook"></ion-icon>

                      <span className="span">Facebook</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.instagram.com/sikharthyinfotech/"
                      target="_blank"
                      className="social-link"
                      style={{ "--color": "hsl(340, 75%, 54%)" }}
                    >
                      <ion-icon name="logo-instagram"></ion-icon>

                      <span className="span">Instagram</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="https://www.linkedin.com/company/sikharthy-infotech-pvt-ltd"
                      target="_blank"
                      className="social-link"
                      style={{ "--color": "hsl(210, 90%, 40%)" }}
                    >
                      <ion-icon name="logo-linkedin"></ion-icon>

                      <span className="span">LinkedIn</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <figure className="hero-banner">
                <img
                  src={images.heroBanner}
                  width="794"
                  height="637"
                  alt="hero banner"
                  className="w-100"
                />
              </figure>
            </div>
          </section>

          {/* #SERVICES */}

          <section
            className="section services"
            id="services"
            aria-label="service"
          >
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Our Services
              </p>

              <h2 className="h2 section-title text-center">
                Managing your business with our{" "}
                <span className="has-before"> best service</span>
              </h2>

              <ul className="grid-list">
                <li>
                  <div
                    className="service-card"
                    style={{ "--color": "267, 76%, 57%" }}
                  >
                    <div className="card-icon">
                      <img
                        src={images.serviceIcon1}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Web Development
                      </Link>
                    </h3>
                  </div>
                </li>

                <li>
                  <div
                    className="service-card"
                    style={{ "--color": "210, 100%, 53%" }}
                  >
                    <div className="card-icon">
                      <img
                        src={images.serviceIcon2}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Content Writing
                      </Link>
                    </h3>
                  </div>
                </li>

                <li>
                  <div
                    className="service-card"
                    style={{ "--color": "157, 89%, 44%" }}
                  >
                    <div className="card-icon">
                      <img
                        src={images.serviceIcon3}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Digital Marketing
                      </Link>
                    </h3>
                  </div>
                </li>

                <li>
                  <div
                    className="service-card"
                    style={{ "--color": "52, 98%, 50%" }}
                  >
                    <div className="card-icon">
                      <img
                        src={images.serviceIcon4}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Industrial Training
                      </Link>
                    </h3>
                  </div>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="link-card"
                    style={{ "--color": "203, 97%, 75%" }}
                  >
                    <span className="span">04 More Service</span>

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* #FEATURE */}

          <section
            className="section feature"
            id="feature"
            aria-label="feature"
          >
            <div className="container">
              <figure className="feature-banner">
                <img
                  src={images.featureBanner}
                  width="582"
                  height="585"
                  loading="lazy"
                  alt="feature banner"
                  className="w-100"
                />
              </figure>

              <div className="feature-content">
                <p className="section-subtitle has-before text-center">
                  Why Choose us
                </p>

                <h2 className="h2 section-title">
                  Specialist in avoiding clients' financial{" "}
                  <span className="has-before">challenges</span>
                </h2>

                <ul className="feature-list">
                  <li>
                    <div className="feature-card">
                      <div
                        className="card-icon"
                        style={{ "--color": "174, 77%, 50%" }}
                      >
                        <ion-icon
                          name="rocket-sharp"
                          aria-hidden="true"
                        ></ion-icon>
                      </div>

                      <div>
                        <h3 className="h3 card-title">Fast working process</h3>

                        <p className="card-text">
                          At Sikharthy, we pride ourselves on efficient, on-time
                          results. Trust us for fast, reliable service.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="feature-card">
                      <div
                        className="card-icon"
                        style={{ "--color": "241, 77%, 63%" }}
                      >
                        <ion-icon
                          name="people-sharp"
                          aria-hidden="true"
                        ></ion-icon>
                      </div>

                      <div>
                        <h3 className="h3 card-title">Dedicated team</h3>

                        <p className="card-text">
                          At Sikharthy, our dedicated team ensures top-notch
                          results, every time.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="feature-card">
                      <div
                        className="card-icon"
                        style={{ "--color": "343, 98%, 60%" }}
                      >
                        <ion-icon
                          name="headset-sharp"
                          aria-hidden="true"
                        ></ion-icon>
                      </div>

                      <div>
                        <h3 className="h3 card-title">24/7 hours support</h3>

                        <p className="card-text">
                          At Sikharthy, we provide 24x7 hours support to meet
                          your needs anytime, anywhere.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* #PROJECT */}

          <section
            className="section project"
            id="project"
            aria-label="project"
          >
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Projects
              </p>

              <h2 className="h2 section-title text-center">
                Pixology complete <span className="has-before">project</span>
              </h2>

              <ul className="filter-list">
                <li>
                  <button className="filter-btn active">Website</button>
                </li>

                <li>
                  <button className="filter-btn">Training</button>
                </li>
              </ul>

              <ul className="grid-list">
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src={images.projectBanner1}
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3">
                        <Link to="/" className="card-title">
                          Project
                        </Link>
                      </h3>

                      <Link to="/" className="card-tag">
                        Website
                      </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.projectBanner2}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3">
                        <Link to="/" className="card-title">
                          Project
                        </Link>
                      </h3>

                      <Link to="/" className="card-tag">
                        Website
                      </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.projectBanner3}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3">
                        <Link to="/" className="card-title">
                          Project
                        </Link>
                      </h3>

                      <Link to="/" className="card-tag">
                        Website
                      </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.projectBanner4}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3">
                        <Link to="/" className="card-title">
                          Project
                        </Link>
                      </h3>

                      <Link to="/" className="card-tag">
                        Website
                      </Link>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.projectBanner5}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3">
                        <Link to="/" className="card-title">
                          Project
                        </Link>
                      </h3>

                      <Link to="/" className="card-tag">
                        Website
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #NEWSLETTER */}

          <section
            className="section newsletter has-bg-img"
            id="newsletter"
            aria-label="newsletter"
            style={{ backgroundImage: `url("${images.newsletterBg}")` }}
          >
            <div className="container">
              <figure className="newsletter-banner">
                <img
                  src={images.newsletterBanner}
                  width="355"
                  height="356"
                  loading="lazy"
                  alt="newsletter banner"
                  className="w-100"
                />
              </figure>

              <div className="newsletter-content">
                <p className="section-subtitle has-before">Get every update</p>

                <h2 className="h2 section-title">
                  Subscribe newsletter get latest updates and deals
                </h2>

                <form action="" className="newsletter-form">
                  <input
                    type="email"
                    name="email_address"
                    placeholder="Enter your mail"
                    required
                    className="email-field"
                  />

                  <button
                    type="submit"
                    className="btn btn-secondary has-before has-after"
                  >
                    <span className="span">Subscribe</span>

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* #BLOG */}

          <section className="section blog" id="blog" aria-label="blog">
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Blog Post
              </p>

              <h2 className="h2 section-title text-center">
                Popular <span className="has-before">blog post</span>
              </h2>

              <ul className="blog-list">
                <li>
                  <div className="blog-card large">
                    <figure className="card-banner">
                      <img
                        src={images.blogBanner1}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="blog banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/" className="tag">
                          Development
                        </Link>

                        <Link to="/" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3>
                        <Link to="/" className="card-title">
                          Dummy blog
                        </Link>
                      </h3>

                      <p className="card-text">
                        At Pixology we specialize in designing, building,
                        shipping and scaling beautiful.At Pixology we specialize
                        in designing, building, shipping and scaling beautiful.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.blogBanner2}
                        width="202"
                        height="162"
                        loading="lazy"
                        alt="blog banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/" className="tag">
                          Development
                        </Link>

                        <Link to="/" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3 className="h3">
                        <Link to="/" className="card-title">
                          Dummy blog
                        </Link>
                      </h3>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.blogBanner3}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="blog banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/" className="tag">
                          Development
                        </Link>

                        <Link to="/" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3 className="h3">
                        <Link to="/" className="card-title">
                          Dummy blog
                        </Link>
                      </h3>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.blogBanner4}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="blog banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/" className="tag">
                          Development
                        </Link>

                        <Link to="/" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3 className="h3">
                        <Link to="/" className="card-title">
                          Dummy blog
                        </Link>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>

      {/* #FOOTER */}

      <footer className="footer">
        <div className="container">
          <div className="footer-top section">
            <div className="footer-brand">
              <p className="footer-list-title">About Brand</p>

              <p className="footer-text">
                A new way to make the payments easy, reliable and 100% secure.
                claritatem itamconse quat. Exerci tationulla
              </p>

              <ul className="social-list">
                <li>
                  <Link to="/" className="social-link">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Usefull Links</p>
              </li>

              <li>
                <Link to="/" className="footer-link">
                  Contact us
                </Link>
              </li>

              <li>
                <Link to="/" className="footer-link">
                  Terms & Services
                </Link>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Community</p>
              </li>

              <li>
                <Link to="/" className="footer-link">
                  Help Center
                </Link>
              </li>

              <li>
                <Link to="/" className="footer-link">
                  Partners
                </Link>
              </li>

              <li>
                <Link to="/" className="footer-link">
                  Suggestions
                </Link>
              </li>

              <li>
                <Link to="/" className="footer-link">
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/" className="footer-link">
                  Newsletters
                </Link>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Instagram post</p>
              </li>

              <li>
                <ul className="insta-post">
                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src={images.instaPost1}
                          width="77"
                          height="63"
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover"
                        />
                      </figure>

                      <Link to="/" className="card-content">
                        <ion-icon
                          name="logo-instagram"
                          aria-hidden="true"
                        ></ion-icon>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src={images.instaPost2}
                          width="77"
                          height="63"
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover"
                        />
                      </figure>

                      <Link to="/" className="card-content">
                        <ion-icon
                          name="logo-instagram"
                          aria-hidden="true"
                        ></ion-icon>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src={images.instaPost3}
                          width="77"
                          height="63"
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover"
                        />
                      </figure>

                      <Link to="/" className="card-content">
                        <ion-icon
                          name="logo-instagram"
                          aria-hidden="true"
                        ></ion-icon>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src={images.instaPost4}
                          width="77"
                          height="63"
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover"
                        />
                      </figure>

                      <Link to="/" className="card-content">
                        <ion-icon
                          name="logo-instagram"
                          aria-hidden="true"
                        ></ion-icon>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src={images.instaPost5}
                          width="77"
                          height="63"
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover"
                        />
                      </figure>

                      <Link to="/" className="card-content">
                        <ion-icon
                          name="logo-instagram"
                          aria-hidden="true"
                        ></ion-icon>
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="insta-card">
                      <figure className="post-banner">
                        <img
                          src={images.instaPost6}
                          width="77"
                          height="63"
                          loading="lazy"
                          alt="instagram post"
                          className="img-cover"
                        />
                      </figure>

                      <Link to="/" className="card-content">
                        <ion-icon
                          name="logo-instagram"
                          aria-hidden="true"
                        ></ion-icon>
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2023 All Rights Reserved by Brand
            </p>

            <ul className="footer-bottom-list">
              <li>
                <Link to="/" className="footer-bottom-link">
                  Terms and conditions
                </Link>
              </li>

              <li>
                <Link to="/" className="footer-bottom-link">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* #BACK TO TOP */}

      {/* <Link
        to="/"
        className={`back-top-btn ${backTopBtnShow ? "active" : ""} has-after`}
        aria-label="back to top"
      >
        <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
      </Link> */}
    </>
  );
}
