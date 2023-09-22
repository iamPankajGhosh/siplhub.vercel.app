import React from "react";
import { Link } from "react-router-dom";

import { Preloader, Navbar, Footer } from "../components";
import images from "../constants/images";

export default function Services() {
  return (
    <>
      <Preloader />
      <Navbar />

      <main>
        <article>
          {/* #HERO */}

          <section className="section hero" id="home" aria-label="hero">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">
                  Elevate Your Business with Our {""}
                  <span className="has-before">Exceptional</span> Services
                </h1>

                <p className="hero-text">
                  In today's dynamic business landscape, effective management is
                  paramount to achieving success and staying competitive. At
                  Sikharthy Infotect, we are committed to helping you take
                  charge of your business and propel it to new heights through
                  our comprehensive suite of services.
                </p>
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
        </article>
      </main>

      <Footer />
    </>
  );
}
