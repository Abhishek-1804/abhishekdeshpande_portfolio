import React from "react";
import "./Home.css";

export default function Home(props) {
  const hireMeEmail = "abhidp55@gmail.com";

  /* prettier-ignore */
  const pdfUrl = "https://drive.google.com/file/d/1a9L2owlEsZeznWbuzlrIWQ0cxEZnoCV0/view?usp=sharing";

  return (
    <section className="home-section">
      <div className="container col-xxl-10 px-0">
        <div className="row flex-lg-row align-items-center g-5">
          <div className="col-lg-6 col-sm-12 text-center text-lg-start px-5">
            <p className="mb-0">Hello, I'm</p>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-1">
              Abhishek Deshpande
            </h1>
            <p className="lead">A creative full-stack developer</p>
            <div className="d-grid gap-2 d-md-flex justify-content-lg-start">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Download CV
              </a>
              <a
                href={`mailto:${hireMeEmail}`}
                target="_blank"
                className="btn btn-secondary btn-lg px-4 me-md-2"
              >
                Hire Me
              </a>
            </div>
            <div className="icons_for_socials d-flex align-items-center mt-2">
              <a
                aria-label="github"
                title="github"
                href="//github.com/Abhishek-1804"
              >
                <img
                  src="images/socials-icons/github.svg"
                  alt="GitHub"
                  style={{ width: "30px", height: "45px", marginRight: "20px" }}
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
          <div className="col-12 col-sm-12 col-lg-6">
            <div className="HeroCardstyle__CodeCardWrapper-sc-n6jkdr-1 ja-dhHv">
              <pre>
                1&nbsp;&nbsp;className <b>Person</b> &#123;
              </pre>
              <pre>2&nbsp;&nbsp;&nbsp;&nbsp; constructor() &#123;</pre>
              <pre>
                3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "
                <b>Abhishek Deshpande</b>";
              </pre>
              <pre>
                4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["
                <b>FULL STACK</b>", "<b>ML</b>", "<b>DEV</b>"];
              </pre>
              <pre>
                5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = new
                Date().getFullYear() - 2000;
              </pre>
              <pre>6&nbsp;&nbsp;&nbsp;&nbsp; &#125;</pre>
              <pre>7&nbsp;&#125;</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
