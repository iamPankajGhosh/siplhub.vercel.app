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

          {/* #TRAINING COURSES */}

          <section className="section blog" id="blog" aria-label="blog">
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Training Courses
              </p>

              <h2 className="h2 section-title text-center">
                Industrial Training <span className="has-before"> Program</span>
              </h2>

              <ul className="blog-list">
                <li>
                  <div className="blog-card large">
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
                          Developer Internship
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
                          Digital Marketing
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

                <li>
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
                </li>
              </ul>

              <br />

              <ul className="blog-list">
                <li>
                  <div className="blog-card large">
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
                          Industrial Training Program
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
                          Mobile App Developement
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

                <li>
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
                </li>
              </ul>
            </div>
          </section>

          {/* #SKILL DEVELOPMENT COURSES */}

          <section className="section blog" id="blog" aria-label="blog">
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Skill Development Courses
              </p>

              <h2 className="h2 section-title text-center">
                Learn New <span className="has-before"> Technology</span>
              </h2>

              <ul className="blog-list">
                <li>
                  <div className="blog-card large">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner11}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="blog banner"
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
                          C and C++
                        </Link>
                      </h3>

                      <p className="card-text">
                        C and C++ are powerful programming languages widely used
                        for system-level programming, embedded systems, and
                        application development.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner12}
                        width="202"
                        height="162"
                        loading="lazy"
                        alt="blog banner"
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
                          JAVA Programming
                        </Link>
                      </h3>

                      <p className="card-text">
                        However, when Java is promoted as the sole programming
                        language, its flaws and limitations become serious.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner13}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="blog banner"
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
                          Python Programming
                        </Link>
                      </h3>

                      <p className="card-text">
                        Python strives for a simpler while giving developers a
                        choice in their coding methodology.The Python is a great
                        first language, elicited.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner14}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="blog banner"
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
                          PHP Programming
                        </Link>
                      </h3>

                      <p className="card-text">
                        PHP is about as exciting as your toothbrush. You use it
                        every day, it does the job, it is a simple tool. There
                        are people who actually like programming.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <br />

              <ul className="blog-list">
                <li>
                  <div className="blog-card large">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner15}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="blog banner"
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
                          AI & ML
                        </Link>
                      </h3>

                      <p className="card-text">
                        Artificial intelligence would be the ultimate version of
                        Google. I visualize a time when we will be to robots
                        what dogs are to humans, and I’m rooting for the
                        machines.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner16}
                        width="202"
                        height="162"
                        loading="lazy"
                        alt="blog banner"
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
                          JavaScript
                        </Link>
                      </h3>

                      <p className="card-text">
                        Every line of code you write in a language like
                        JavaScript affects.Happiness plays an important role in
                        the programming process. Rewarding yourself for a job.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner17}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="blog banner"
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
                          MEAN Stack
                        </Link>
                      </h3>

                      <p className="card-text">
                        A relatively new stack, MEAN stands for MongoDB,
                        Express. js, AngularJS, and Node.js. MEAN is an
                        end-to-end JavaScript stack largely used for cloud-ready
                        applications.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <img
                        src={images.courseBanner18}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="blog banner"
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
                          MERN Stack
                        </Link>
                      </h3>

                      <p className="card-text">
                        MERN stack is a collection of technologies that enables
                        faster application development. It is used by developers
                        worldwide.This is because the four technologies.
                      </p>
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
