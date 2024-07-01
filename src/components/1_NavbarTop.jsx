import React, { useEffect, useState } from "react";
import "./1_Navbar.css";

const NavbarTop = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 10;
      setScrolled(!isTop);

      const featuresSection = document.getElementById("features-section");
      const pricingSection = document.getElementById("pricing-section");
      const reviewSection = document.getElementById("review-section");
      const questionSection = document.getElementById("question-section");

      if (window.scrollY <= featuresSection.offsetTop) {
        setActiveSection("home-section");
      } else if (
        window.scrollY >= featuresSection.offsetTop &&
        window.scrollY <= pricingSection.offsetTop
      ) {
        setActiveSection("features-section");
      } else if (
        window.scrollY >= pricingSection.offsetTop &&
        window.scrollY <= reviewSection.offsetTop
      ) {
        setActiveSection("pricing-section");
      } else if (
        window.scrollY >= reviewSection.offsetTop &&
        window.scrollY <= questionSection.offsetTop
      ) {
        setActiveSection("review-section");
      } else {
        setActiveSection("contact-section");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar_container">
        <div className="navbar-brand">
          <a className="Nav_Header" href="#home-section">
            FRAME
          </a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
          <li
            className={`nav-item ${
              activeSection === "home-section" ? "active" : ""
            }`}
          >
            <a className="nav-link" href="#home-section" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "features-section" ? "active" : ""
            }`}
          >
            <a
              className="nav-link"
              href="#features-section"
              onClick={closeMenu}
            >
              Features
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "pricing-section" ? "active" : ""
            }`}
          >
            <a className="nav-link" href="#pricing-section" onClick={closeMenu}>
              Pricing
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "review-section" ? "active" : ""
            }`}
          >
            <a className="nav-link" href="#review-section" onClick={closeMenu}>
              Reviews
            </a>
          </li>
          <li
            className={`nav-item ${
              activeSection === "contact-section" ? "active" : ""
            }`}
          >
            <a className="nav-link" href="#contact-section" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarTop;
