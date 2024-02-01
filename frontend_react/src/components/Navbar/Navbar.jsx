import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "../index";

import images from "../../constants/images";
import "./Navbar.css";

export default function Navbar() {
  /**
   * navbar links
   */
  const brandLogo = images.logo;
  const navItems = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "About",
      slug: "/about",
    },
    {
      title: "Services",
      slug: "/services",
    },
    {
      title: "Gallery",
      slug: "/gallery",
    },
    {
      title: "Contact",
      slug: "/contact",
    },
  ];

  /**
   * navbar toggle
   */

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  /**
   * header show when scroll down to 80px
   */

  const [headerShow, setHeaderShow] = useState(false);
  const [backTopBtnShow, setBackTopBtnShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setHeaderShow(true);
      setBackTopBtnShow(true);
    } else {
      setHeaderShow(false);
      setBackTopBtnShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backTopBtnShow]);

  /* handle back to top*/

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleBackToTop();
  }, []);

  return (
    <>
      <header className={`header ${headerShow ? "active" : ""}`}>
        <div className="container">
          <Link to="/" className="logo" onClick={handleBackToTop}>
            <img
              src={brandLogo}
              width="150"
              height="95"
              loading="lazy"
              alt="Sikharthy Infotech"
            />
          </Link>

          <nav className={`navbar ${isOpen ? "active" : ""}`}>
            <div className="wrapper">
              <Link to="/" className="logo" onClick={toggleNavbar}>
                <img
                  src={images.logoDark}
                  width="100"
                  loading="lazy"
                  alt="Sikharthy Infotech"
                />
              </Link>

              <button
                className="nav-close-btn"
                aria-label="close menu"
                onClick={closeNavbar}
              >
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <ul className="navbar-list">
              {navItems.map((item) => (
                <li
                  key={item.title}
                  className="navbar-item"
                  onClick={closeNavbar}
                >
                  <NavLink
                    to={item.slug}
                    className="navbar-link"
                    onClick={handleBackToTop}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="nav-open-btn"
            aria-label="open menu"
            onClick={toggleNavbar}
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>

          <Button goto="/contact" type="primary">
            Let’s Talk 👋
          </Button>

          <div
            className={`overlay ${isOpen ? "active" : ""}`}
            onClick={toggleNavbar}
          ></div>
        </div>

        <button
          className={`back-top-btn ${backTopBtnShow ? "active" : ""}`}
          onClick={handleBackToTop}
        >
          <span>
            <ion-icon name="caret-up-outline"></ion-icon>
          </span>
        </button>
      </header>
    </>
  );
}
