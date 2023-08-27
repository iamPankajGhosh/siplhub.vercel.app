import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  /**
   * navbar links
   */
  const brandLogo = "Sikharthy Infotech";
  const navbarLink = ["home", "about", "services", "contact"];

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
  }, []);

  return (
    <>
      <header className={`header ${headerShow ? "active" : ""}`}>
        <div className="container">
          <Link to="/" className="logo">
            {brandLogo}
          </Link>

          <nav className={`navbar ${isOpen ? "active" : ""}`}>
            <div className="wrapper">
              <Link to="/" className="logo" onClick={toggleNavbar}>
                {brandLogo}
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
              {navbarLink.map((link) => (
                <li className="navbar-item" onClick={closeNavbar}>
                  <Link to={`/${link}`} className="navbar-link">
                    {link}
                  </Link>
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

          <Link to="/contact" className="btn btn-primary has-before has-after">
            Let’s Talk 👋
          </Link>

          <div
            className={`overlay ${isOpen ? "active" : ""}`}
            onClick={toggleNavbar}
          ></div>
        </div>
      </header>
    </>
  );
}
