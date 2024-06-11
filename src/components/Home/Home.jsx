import React from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";

export default function Home(props) {
  const hireMeEmail = "apdeshp4@asu.edu";

  const pdfUrl =
    "https://drive.google.com/file/d/1Z0g-mcGxI1uOAOPPMJjPJ26FwhIdPU84/view?usp=drive_link";

  return (
    <section className={`home-section ${props.darkMode && "dark-mode"}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="text-center">
            <p>Hello, I'm</p>
            <h1 className="display-5 fw-bold">Abhishek Deshpande</h1>
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
            <div className="d-flex justify-content-center align-items-center">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg m-1"
              >
                Download CV
              </a>
              <a
                href={`mailto:${hireMeEmail}`}
                target="_blank"
                className="btn btn-secondary btn-lg m-1"
              >
                Hire Me
              </a>
            </div>
            <div className="icons_for_socials d-flex justify-content-center mt-2">
              <a
                aria-label="github"
                title="github"
                target="_blank"
                href="//github.com/Abhishek-1804"
              >
                <img
                  src="images/socials-icons/github.svg"
                  alt="GitHub"
                  style={{ width: "40px", height: "50px", marginRight: "10px" }}
                />
              </a>
              <a
                aria-label="linkedin"
                title="linkedin"
                target="_blank"
                href="//linkedin.com/in/abhishekdeshpande18/"
              >
                <img
                  src="images/socials-icons/linkedin.svg"
                  alt="LinkedIn"
                  style={{ width: "45px", height: "50px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
