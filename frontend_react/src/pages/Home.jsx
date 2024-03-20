import { Link, useNavigate } from "react-router-dom";
import images from "../constants/images";
import { Preloader, Button, Form } from "../components";

export default function Home() {
  const navigate = useNavigate();

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
                  Building Digital <span className="has-before"> Website</span>,
                  Content and Marketing
                </h1>

                <p className="hero-text">
                  Sikharthy Infotech Pvt. Ltd. is a Kolkata-based company
                  offering web development, software development, website
                  design, content development, and digital marketing services.
                </p>

                <div className="wrapper">
                  <Button goto="/contact">How It Works</Button>

                  <button
                    className="hero-btn"
                    aria-label="sikharthy promo"
                    onClick={() => {
                      navigate("/Watch");
                    }}
                  >
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
                        Web & Mobile App Development
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
                      <Link to="/services" className="card-title">
                        Training
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
                  <Link
                    to="/services"
                    className="link-card"
                    style={{ "--color": "203, 97%, 75%" }}
                  >
                    <span className="span">10 More Service</span>

                    <ion-icon
                      name="arrow-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </Link>
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
                  Specialist in avoiding client's financial{" "}
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

          {/* #PROJECT */}

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
                        <Link
                          to="https://paintemporium.in/"
                          target="_blank"
                          className="card-title"
                        >
                          Paint Emporium
                        </Link>
                      </h3>

                      <Link
                        to="https://paintemporium.in/"
                        target="_blank"
                        className="card-tag"
                      >
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
                        <Link
                          to="https://lcgpolytechnic.netlify.app/"
                          target="_blank"
                          className="card-title"
                        >
                          LCG Polytechnic
                        </Link>
                      </h3>

                      <Link
                        to="https://lcgpolytechnic.netlify.app/"
                        target="_blank"
                        className="card-tag"
                      >
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
                        <Link
                          to="https://security.siplhub.com/"
                          target="_blank"
                          className="card-title"
                        >
                          Black & Blue
                        </Link>
                      </h3>

                      <Link
                        to="https://security.siplhub.com/"
                        target="_blank"
                        className="card-tag"
                      >
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
                        <Link
                          to="http://www.touresprit.com/"
                          target="_blank"
                          className="card-title"
                        >
                          Tour Esprite
                        </Link>
                      </h3>

                      <Link
                        to="http://www.touresprit.com/"
                        target="_blank"
                        className="card-tag"
                      >
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
                        <Link
                          to="https://sm-enterprise.in/"
                          target="_blank"
                          className="card-title"
                        >
                          SM Enterprise
                        </Link>
                      </h3>

                      <Link
                        to="https://sm-enterprise.in/"
                        target="_blank"
                        className="card-tag"
                      >
                        Website
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #AFFILIATION */}

          <section
            className="section services"
            id="affiliation"
            aria-label="service"
          >
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Certification
              </p>

              <h2 className="h2 section-title text-center">
                Our Affiliations &{" "}
                <span className="has-before">Accreditation</span>
              </h2>

              <ul className="grid-list">
                <li>
                  <div
                    className="service-card"
                    style={{ "--color": "210, 100%, 53%" }}
                  >
                    <div className="card-icon">
                      <img
                        src={images.affiliationIcon1}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Utkarsh Bangla
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
                        src={images.affiliationIcon2}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        National Skill Development Corporation
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
                        src={images.affiliationIcon3}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Startup India
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
                        src={images.affiliationIcon4}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Board Of Practical Training
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
                        src={images.affiliationIcon5}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Skill India
                      </Link>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #NEWSLETTER */}

          <section
            className="section newsletter has-bg-img"
            id="newsletter"
            aria-label="newsletter"
            style={{ backgroundImage: `url("${images.newsletterBg}")` }}
          >
            <div className="container">
              <figure className="newsletter-banner">
                <img
                  src={images.newsletterBanner}
                  width="355"
                  height="356"
                  loading="lazy"
                  alt="newsletter banner"
                  className="w-100"
                />
              </figure>

              <div className="newsletter-content">
                <p className="section-subtitle has-before">Get every update</p>

                <h2 className="h2 section-title">New Student Registration</h2>

                <Form />
              </div>
            </div>
          </section>

          {/* #CLIENTS */}

          <section
            className="section services"
            id="client"
            aria-label="service"
          >
            <div className="container">
              <p className="section-subtitle has-before text-center">Clients</p>

              <h2 className="h2 section-title text-center">
                Our Honourable <span className="has-before"> Clients</span>
              </h2>

              <ul className="grid-list">
                <li>
                  <div
                    className="service-card"
                    style={{ "--color": "210, 100%, 53%" }}
                  >
                    <div className="card-icon">
                      <img
                        src={images.clientLogo1}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="client logo"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Framable
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
                        src={images.clientLogo2}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="client logo"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Tour Esprite
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
                        src={images.clientLogo3}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="client logo"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Stay Safe With Us
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
                        src={images.clientLogo4}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="client logo"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Learnin 8 Days
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
                        src={images.clientLogo5}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Black & Blue
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
                        src={images.clientLogo6}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        AOTA
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
                        src={images.affiliationIcon4}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Board Of Practical Training
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
                        src={images.clientLogo8}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="client logo"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Govt. of West Bengal
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
                        src={images.clientLogo9}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Administrative Training Institute
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
                        src={images.clientLogo10}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="client logo"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Top Coat Paints
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
                        src={images.clientLogo11}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="client logo"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        N.R.Rubber Industries
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
                        src={images.clientLogo12}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        P.I.I.M
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
                        src={images.clientLogo13}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        L.C.G Polytechnic
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
                        src={images.clientLogo14}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="service icon"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Techno India Group
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
                        src={images.clientLogo15}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="client logo"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Guru Nanak Institute of Technology
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
                        src={images.clientLogo16}
                        width="30"
                        height="30"
                        loading="lazy"
                        alt="client logo"
                      />
                    </div>

                    <h3 className="h3">
                      <Link to="#" className="card-title">
                        Paint Emporium
                      </Link>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* #COURSE*/}

          <section className="section blog" id="blog" aria-label="blog">
            <div className="container">
              <p className="section-subtitle has-before text-center">
                Training Courses
              </p>

              <h2 className="h2 section-title text-center">
                Popular Training and Skill{" "}
                <span className="has-before">Development</span> Courses
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
                        alt="service banner"
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
                        src={images.courseBanner2}
                        width="200"
                        height="162"
                        loading="lazy"
                        alt="service banner"
                        className="img-cover"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="wrapper">
                        <Link to="/services" className="tag">
                          Skill Development
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
                        src={images.courseBanner3}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="service banner"
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
                        src={images.courseBanner4}
                        width="644"
                        height="363"
                        loading="lazy"
                        alt="service banner"
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
    </>
  );
}
