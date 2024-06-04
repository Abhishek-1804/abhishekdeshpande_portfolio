import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(props) {
  const [active, setActive] = useState("home");

  /* prettier-ignore */
  const linkToRedirect = "https://github.com/Abhishek-1804/abhishekdeshpande_portfolio";

  return (
    <section className={`navbar-section ${props.darkMode && "dark-mode"}`}>
      <div className="d-flex container align-items-center justify-content-between">
        <div className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item mx-1">
              <a
                href="#home"
                className={`nav-link ${active === "home" ? "active" : ""}`}
                onClick={() => {
                  setActive("home");
                  props.selectedNav("home");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-1">
              <a
                href="#skills"
                className={`nav-link ${active === "skills" ? "active" : ""}`}
                onClick={() => {
                  setActive("skills");
                  props.selectedNav("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item mx-1">
              <a
                href="#work-exp"
                className={`nav-link ${active === "work-exp" ? "active" : ""}`}
                onClick={() => {
                  setActive("work-exp");
                  props.selectedNav("work-exp");
                }}
              >
                Work Exp
              </a>
            </li>
            <li className="nav-item mx-1">
              <a
                href="#projects"
                className={`nav-link ${active === "projects" ? "active" : ""}`}
                onClick={() => {
                  setActive("projects");
                  props.selectedNav("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item mx-1">
              <a
                href="#contact"
                className={`nav-link ${active === "contact" ? "active" : ""}`}
                onClick={() => {
                  setActive("contact");
                  props.selectedNav("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={props.setDarkMode}
            className={`btn mx-1 ${
              props.darkMode ? "btn-outline-light" : "btn-outline-secondary"
            }`}
          >
            {props.darkMode ? (
              <>
                <FaSun className="sun-icon" />
              </>
            ) : (
              <>
                <FaMoon className="moon-icon" />
              </>
            )}
          </button>
          <div className="redirect-button">
            <a
              href={linkToRedirect}
              className={`btn ${
                props.darkMode ? "btn-outline-light" : "btn-outline-secondary"
              }`}
              target="_blank"
              rel="noreferrer"
            >
              View Source Code
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="icon-spacing"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
