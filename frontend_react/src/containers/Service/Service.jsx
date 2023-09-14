import React from "react";
import { Link } from "react-router-dom";

import images from "../../constants/images";

import "./Service.css";

export default function Service() {
  return (
    <>
      <section className="section services" id="services" aria-label="service">
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

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
