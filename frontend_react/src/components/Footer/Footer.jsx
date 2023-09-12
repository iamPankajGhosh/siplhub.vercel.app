import React from "react";
import { Link } from "react-router-dom";

import images from "../../constants/images";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top section">
            <div className="footer-brand">
              <p className="footer-list-title">About Sikhathy Infotech</p>

              <p className="footer-text">
                Sikharthy Infotech Pvt. Ltd. is a Kolkata-based company offering
                web development, software development, website design, content
                development, and digital marketing services.
              </p>

              <ul className="social-list">
                <li>
                  <Link
                    to="https://www.youtube.com/@sikharthyinfotech9023"
                    target="_blank"
                    className="social-link"
                  >
                    <ion-icon name="logo-youtube"></ion-icon>
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.facebook.com/sikharthyinfotech/"
                    target="_blank"
                    className="social-link"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.linkedin.com/company/sikharthy-infotech-pvt-ltd"
                    target="_blank"
                    className="social-link"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.instagram.com/sikharthyinfotech/"
                    target="_blank"
                    className="social-link"
                  >
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

                      <Link
                        to="https://www.instagram.com/p/Cw4U5JZu3Wz/"
                        target="_blank"
                        className="card-content"
                      >
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

                      <Link
                        to="https://www.instagram.com/p/Cwjd96BBcZ4/"
                        target="_blank"
                        className="card-content"
                      >
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

                      <Link
                        to="https://www.instagram.com/p/Cv8fiIOPUSj/"
                        target="_blank"
                        className="card-content"
                      >
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

                      <Link
                        to="https://www.instagram.com/p/CtvZNKRBBmY/"
                        target="_blank"
                        className="card-content"
                      >
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

                      <Link
                        to="https://www.instagram.com/p/Ctsmnephs8F/"
                        target="_blank"
                        className="card-content"
                      >
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

                      <Link
                        to="https://www.instagram.com/p/CrsMaN2usvo/"
                        target="_blank"
                        className="card-content"
                      >
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
              &copy; 2023 All Rights Reserved by Sikharthy Infotech
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
    </>
  );
}