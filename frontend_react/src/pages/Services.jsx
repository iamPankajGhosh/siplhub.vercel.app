import { Link } from "react-router-dom";

import { Preloader } from "../components";
import images from "../constants/images";

export default function Services() {
  return (
    <>
      <Preloader />
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
                  At Sikharthy Infotect, we empower your business to reach its
                  fullest potential using cutting-edge technology, innovative
                  strategies, and comprehensive training programs. Our dedicated
                  teams specialize in Digital Marketing, Web and Mobile App
                  Development, and Professional Training Services. Discover how
                  we can transform your business today.
                </p>
              </div>

              <figure className="hero-banner">
                <img
                  src={images.serviceBanner}
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
                <span className="has-before"> best services</span>
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
                      <a href="#webDevelopment" className="card-title">
                        Web & Mobile App Development
                      </a>
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
                      <a href="#training" className="card-title">
                        Training
                      </a>
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
                      <a href="#digitalMarketing" className="card-title">
                        Digital Marketing
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #Development Services*/}

          <section
            className="section blog"
            id="webDevelopment"
            aria-label="blog"
          >
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Development
              </p>

              <h2 className="h2 section-title text-center">
                Web and Mobile App{" "}
                <span className="has-before"> Developement</span>
              </h2>

              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.CustomWebsiteBanner}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Development
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3>
                        <Link to="/services" className="card-title">
                          Custom Website Design
                        </Link>
                      </h3>

                      <p className="card-text">
                        Innovative and responsive designs that captivate and
                        convert.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.EcommerceBanner}
                        width="202"
                        height="162"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Development
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3 className="h3">
                        <Link to="/services" className="card-title">
                          E-commerce Solutions
                        </Link>
                      </h3>

                      <p className="card-text">
                        Robust online stores with user-friendly shopping
                        experiences.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <br />

              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.MobileAppBanner}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Development
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3>
                        <Link to="/services" className="card-title">
                          Mobile App Development
                        </Link>
                      </h3>

                      <p className="card-text">
                        Android and iOS apps that offer engaging and interactive
                        experiences to your customers.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.SupportBanner}
                        width="202"
                        height="162"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Development
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3 className="h3">
                        <Link to="/services" className="card-title">
                          Maintenance & Support
                        </Link>
                      </h3>

                      <p className="card-text">
                        Ongoing support to ensure your digital assets remain
                        up-to-date and secure.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #Training */}

          <section className="section blog" id="training" aria-label="blog">
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Training
              </p>

              <h2 className="h2 section-title text-center">
                We Provide <span className="has-before"> Training</span>
              </h2>

              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.CorporateBanner}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Training
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3>
                        <Link to="/services" className="card-title">
                          Corporate Training
                        </Link>
                      </h3>

                      <p className="card-text">
                        Tailor-made programs to boost your team's skills in line
                        with the latest industry trends.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.CustomizedTrainingBanner}
                        width="202"
                        height="162"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Training
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3 className="h3">
                        <Link to="/services" className="card-title">
                          Customized Training Solutions
                        </Link>
                      </h3>

                      <p className="card-text">
                        Tailored training programs designed to meet your
                        specific business needs and objectives.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <br />

              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.WebCourseBanner}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Training
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3>
                        <Link to="/services" className="card-title">
                          Web Development Courses
                        </Link>
                      </h3>

                      <p className="card-text">
                        From HTML basics to advanced programming, equip your
                        team with the coding skills necessary for the digital
                        age.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.InternshipBanner}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Training
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3>
                        <Link to="/services" className="card-title">
                          Internship Opportunities
                        </Link>
                      </h3>

                      <p className="card-text">
                        Hands-on experience in a real-world environment for
                        aspiring professionals looking to kickstart their
                        career.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #Digital Marketing */}

          <section
            className="section blog"
            id="digitalMarketing"
            aria-label="blog"
          >
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Digital Marketing
              </p>

              <h2 className="h2 section-title text-center">
                We Provide Digital <span className="has-before">Marketing</span>
              </h2>

              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.SeoAndSemBanner}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Digital Marketing
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3>
                        <Link to="/services" className="card-title">
                          SEO & SEM
                        </Link>
                      </h3>

                      <p className="card-text">
                        Boost your website's ranking on search engines to
                        attract high-quality traffic.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.SocialMediaManagementBanner}
                        width="202"
                        height="162"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Digital Marketing
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3 className="h3">
                        <Link to="/services" className="card-title">
                          Social Media Management
                        </Link>
                      </h3>

                      <p className="card-text">
                        Engage and grow your audience across all major platforms
                        with captivating content.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <br />

              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.ContentCreationBanner}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Digital Marketing
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3>
                        <Link to="/services" className="card-title">
                          Content Creation
                        </Link>
                      </h3>

                      <p className="card-text">
                        From blog posts to videos, we create content that
                        resonates with your audience.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.AnalyticsReportingBanner}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="course banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Digital Marketing
                        </Link>

                        <Link to="/services" className="publish-date">
                          <ion-icon
                            name="time-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className="span">August 24, 2023</span>
                        </Link>
                      </div>

                      <h3>
                        <Link to="/services" className="card-title">
                          Analytics & Reporting
                        </Link>
                      </h3>

                      <p className="card-text">
                        Measure success with comprehensive analytics and
                        insights to refine your strategy.
                      </p>
                    </div>
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
