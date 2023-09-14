import React from "react";
import { Link } from "react-router-dom";

import { Preloader, Navbar, Footer } from "../components";
import images from "../constants/images";
import { Hero, Service } from "../containers";

export default function Home() {
  return (
    <>
      <Preloader />

      <Navbar />

      <main>
        <article>
          <Hero />
          <Service />

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
                Sikharthy complete <span className="has-before">project</span>
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
                        Sikharthy Infotech Pvt. Ltd. is a Kolkata-based company
                        offering web development, software development, website
                        design, content development, and digital marketing
                        services.
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

      <Footer />

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
