import React from "react";
import { Link } from "react-router-dom";

import images from "../../constants/images";

import "./Hero.css";

export default function Hero() {
  return (
    <>
      <section className="section hero" id="home" aria-label="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">
              Building Digital <span className="has-before"> Website</span>,
              Content and Marketing
            </h1>

            <p className="hero-text">
              Sikharthy Infotech Pvt. Ltd. is a Kolkata-based company offering
              web development, software development, website design, content
              development, and digital marketing services.
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
    </>
  );
}
