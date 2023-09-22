import React from "react";
import { Link } from "react-router-dom";

import images from "../constants/images";
import { Preloader, Navbar, Footer } from "../components";

export default function About() {
  return (
    <>
      <Preloader />
      <Navbar />

      <main>
        <article>
          <section className="section hero" id="home" aria-label="hero">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">
                  Welcome to <span className="has-before">Sikharthy </span>
                  Infotect Pvt. Ltd.{" "}
                </h1>

                <p className="hero-text">
                  Sikharthy Infotech Pvt. Ltd. is a Kolkata-based company
                  offering web development, software development, website
                  design, content development, and digital marketing services.
                  Our online classes gained significant importance during the
                  pandemic lockdowns, benefiting students, teachers, and
                  institutions alike. They provide flexibility for long-distance
                  education and have the potential to enhance traditional
                  learning. The Internet's role in education is evolving,
                  offering personalized and convenient learning experiences,
                  making it a promising avenue for the future.
                </p>

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
                  src={images.aboutBanner}
                  width="794"
                  height="637"
                  alt="about banner"
                  className="w-100"
                />
              </figure>
            </div>
          </section>

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
        </article>
      </main>

      <Footer />
    </>
  );
}
