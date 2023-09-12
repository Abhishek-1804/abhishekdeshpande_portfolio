import React from "react";
import Typewriter from "typewriter-effect";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Home.css";

export default function Home(props) {
  const hireMeEmail = "abhidp55@gmail.com";
  const pdfUrl =
    "https://drive.google.com/file/d/1a9L2owlEsZeznWbuzlrIWQ0cxEZnoCV0/view?usp=sharing";

  return (
    <section className={`home-section ${props.darkMode && "dark-mode"}`}>
      <div className="container">
        <div className="row flex-lg-row align-items-center g-5">
          <div className="col-lg-12 text-center px-5">
            <p className="mb-0">Hello, I'm</p>
            <h1 className="display-5 fw-bold text-body-emphasis mb-1">
              Abhishek Deshpande
            </h1>
            <div className="typewriter-container">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Data Scientist",
                    "Software Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </div>
            <div className="d-grid d-md-flex justify-content-center align-items-center">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg m-1"
                style={{ height: "50px" }}
              >
                Download CV
              </a>
              <a
                href={`mailto:${hireMeEmail}`}
                target="_blank"
                className="btn btn-secondary btn-lg m-1"
                style={{ height: "50px" }}
              >
                Hire Me
              </a>
              <button
                onClick={props.setDarkMode}
                className={`btn btn-outline-dark ${
                  props.darkMode ? "btn-outline-dark" : "bg-outline-dark"
                } m-1`}
                style={{ height: "40px" }}
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
            </div>
            <div className="icons_for_socials d-flex justify-content-center mt-1">
              <a
                aria-label="github"
                title="github"
                href="//github.com/Abhishek-1804"
              >
                <img
                  src="images/socials-icons/github.svg"
                  alt="GitHub"
                  style={{ width: "30px", height: "45px", marginRight: "10px" }}
                />
              </a>
              <a
                aria-label="linkedin"
                title="linkedin"
                href="//linkedin.com/in/abhishekdeshpande18/"
              >
                <img
                  src="images/socials-icons/linkedin.svg"
                  alt="LinkedIn"
                  style={{ width: "30px", height: "45px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
