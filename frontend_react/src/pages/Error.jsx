import { Link, useNavigate } from "react-router-dom";
import images from "../constants/images";

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <main>
        <section className="section hero" id="home" aria-label="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="h1 hero-title">
                We can't find that <span className="has-before"> page</span>
              </h1>

              <p className="hero-text">
                Sorry, the page you are looking for doesn't exist or has been
                moved.
              </p>

              <div className="wrapper">
                <button
                  className="hero-btn"
                  aria-label="sikharthy promo"
                  onClick={() => {
                    window.history.back();
                  }}
                >
                  <ion-icon name="arrow-back-outline"></ion-icon>

                  <span className="span">Go back</span>
                </button>

                <Link
                  to="/contact"
                  className="btn btn-primary has-before has-after"
                >
                  Contact us
                </Link>
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
                src={images.errorBanner}
                width="794"
                height="637"
                alt="hero banner"
                className="w-100"
              />
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
