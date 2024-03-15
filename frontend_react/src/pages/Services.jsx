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
                  In today's dynamic business landscape, effective management is
                  paramount to achieving success and staying competitive. At
                  Sikharthy Infotech, we are committed to helping you take
                  charge of your business and propel it to new heights through
                  our comprehensive suite of services.
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
                        src={images.courseBanner1}
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
                          Custom Website Development
                        </Link>
                      </h3>

                      <p className="card-text">
                        For software engineering interns, some must-have skills
                        to include are programming, time management, logical
                        analysis, and the ability to contribute and collaborate.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner5}
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
                          E-Commerce Website Development
                        </Link>
                      </h3>

                      <p className="card-text">
                        The goal of digital marketing is to reach potential
                        customers through the use of content. Content is usually
                        published on a website and then promoted through social
                        media, Etc.
                      </p>
                    </div>
                  </div>
                </li>

                {/* <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner6}
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

                      <h3 className="h3">
                        <Link to="/services" className="card-title">
                          Content Writing Internship
                        </Link>
                      </h3>

                      <p className="card-text">
                        The first and foremost quality of an incredible content
                        writer is research proficiency. Internet is a hub of
                        resources and knowledge, but not all of it is accurate.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner7}
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

                      <h3 className="h3">
                        <Link to="/services" className="card-title">
                          Full Stack Developement
                        </Link>
                      </h3>

                      <p className="card-text">
                        A Full Stack Developer works with the Back End or server
                        side of the application as well as the Front End, or
                        client side and the end-to-end application development
                      </p>
                    </div>
                  </div>
                </li> */}
              </ul>

              <br />

              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner8}
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
                          Custom Mobile App Developement
                        </Link>
                      </h3>

                      <p className="card-text">
                        The Industrial Training indicates to a program which
                        aims to provide a managed good practical training within
                        a particular time frame.Training improving the skills.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner9}
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
                          E-Commerce App Developement
                        </Link>
                      </h3>

                      <p className="card-text">
                        Application development is the process of creating a
                        computer program or a set of programs to perform the
                        different tasks that a business requires.
                      </p>
                    </div>
                  </div>
                </li>

                {/* <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner3}
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

                      <h3 className="h3">
                        <Link to="/services" className="card-title">
                          Customer Support Executive
                        </Link>
                      </h3>

                      <p className="card-text">
                        customer support executives manage a team of customer
                        support representatives and maintain customer. The team
                        is adequately trained to promote customer service.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner10}
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

                      <h3 className="h3">
                        <Link to="/services" className="card-title">
                          Management Internship
                        </Link>
                      </h3>

                      <p className="card-text">
                        A Full Stack Python Developer is a software professional
                        who specializes in developing applications using the
                        Python programming language.They are responsible for
                        deploying.
                      </p>
                    </div>
                  </div>
                </li> */}
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
                        src={images.courseBanner1}
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
                        For software engineering interns, some must-have skills
                        to include are programming, time management, logical
                        analysis, and the ability to contribute and collaborate.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner5}
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
                          Pursing Student Training
                        </Link>
                      </h3>

                      <p className="card-text">
                        The goal of digital marketing is to reach potential
                        customers through the use of content. Content is usually
                        published on a website and then promoted through social
                        media, Etc.
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
                        src={images.courseBanner8}
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
                        The Industrial Training indicates to a program which
                        aims to provide a managed good practical training within
                        a particular time frame.Training improving the skills.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #Training */}

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
                        src={images.courseBanner1}
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
                          Social Media Handling
                        </Link>
                      </h3>

                      <p className="card-text">
                        For software engineering interns, some must-have skills
                        to include are programming, time management, logical
                        analysis, and the ability to contribute and collaborate.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner5}
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
                          SEO Friendly Content Writing
                        </Link>
                      </h3>

                      <p className="card-text">
                        The goal of digital marketing is to reach potential
                        customers through the use of content. Content is usually
                        published on a website and then promoted through social
                        media, Etc.
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
                        src={images.courseBanner8}
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
                          SEO
                        </Link>
                      </h3>

                      <p className="card-text">
                        The Industrial Training indicates to a program which
                        aims to provide a managed good practical training within
                        a particular time frame.Training improving the skills.
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
