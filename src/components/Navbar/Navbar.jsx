import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const [active, setActive] = useState("home");

  const { handleNavLinkClick } = props;

  const handleNavLinkClickAndUpdateActive = (sectionName) => {
    setActive(sectionName);
    handleNavLinkClick(sectionName);
  };

  return (
    <section className="navbar">
      <div className="d-flex container align-items-center justify-content-center">
        <header className="d-flex justify-content-center py-3 top-0">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link mx-2 ${active === "home" ? "active" : ""}`}
                onClick={() => handleNavLinkClickAndUpdateActive("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className={`nav-link mx-2 ${
                  active === "skills" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClickAndUpdateActive("skills")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#work-exp"
                className={`nav-link mx-2 ${
                  active === "work-exp" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClickAndUpdateActive("work-exp")}
              >
                Work Exp
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className={`nav-link mx-2 ${
                  active === "projects" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClickAndUpdateActive("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link mx-2 ${
                  active === "contact" ? "active" : ""
                }`}
                onClick={() => handleNavLinkClickAndUpdateActive("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </header>
      </div>
    </section>
  );
}
