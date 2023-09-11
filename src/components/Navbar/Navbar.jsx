import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"; // Import the external link icon

export default function Navbar(props) {
  const [active, setActive] = useState("home");

  /* prettier-ignore */
  const linkToRedirect = "https://github.com/Abhishek-1804/abhishekdeshpande_portfolio";

  return (
    <section className="navbar">
      <div className="d-flex container align-items-center justify-content-center">
        <header className="d-flex justify-content-center py-3 top-0">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link mx-2 ${active === "home" ? "active" : ""}`}
                onClick={() => {
                  setActive("home");
                  props.selectedNav("home");
                }}
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
                onClick={() => {
                  setActive("skills");
                  props.selectedNav("skills");
                }}
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
                onClick={() => {
                  setActive("work-exp");
                  props.selectedNav("work-exp");
                }}
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
                onClick={() => {
                  setActive("projects");
                  props.selectedNav("projects");
                }}
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
                onClick={() => {
                  setActive("contact");
                  props.selectedNav("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </header>
        <div className="redirect-button">
          <a
            href={linkToRedirect}
            className="btn btn-outline-secondary"
            target="_blank"
          >
            View Source Code <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </section>
  );
}
