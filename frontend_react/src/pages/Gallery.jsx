import { Link } from "react-router-dom";
import images from "../constants/images";
import { Preloader } from "../components";

function Gallery() {
  return (
    <>
      <Preloader />
      <main>
        <article>
          <section className="section hero" id="home" aria-label="hero">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title">
                  Captured Moments, Explore Our Photo
                  <span className="has-before">Gallery </span>
                </h1>

                <p className="hero-text">
                  A Visual Journey Through Time, Beauty, and Emotion
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
                  src={images.galleryBanner}
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
            style={{ paddingBlockStart: 0 }}
          >
            <div className="container">
              <ul className="grid-list">
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage5}
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage1}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage2}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage3}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage4}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>

              <ul className="grid-list" style={{ paddingBlockStart: 40 }}>
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage6}
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage7}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage8}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage10}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage12}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>

              <ul className="grid-list" style={{ paddingBlockStart: 40 }}>
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage9}
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage13}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage14}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage15}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage16}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>

              <ul className="grid-list" style={{ paddingBlockStart: 40 }}>
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage17}
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage11}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage18}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage19}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage20}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>

              <ul className="grid-list" style={{ paddingBlockStart: 40 }}>
                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "835", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage22}
                        width="835"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage23}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage24}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage25}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>

                <li>
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": "416", "--height": "429" }}
                    >
                      <img
                        src={images.galleryImage21}
                        width="416"
                        height="429"
                        loading="lazy"
                        alt="card banner"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Gallery;
