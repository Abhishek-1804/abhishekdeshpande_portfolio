import React from "react";
import "./Projects.css";
import ProjectsData from "./ProjectsData";

export default function Projects(props) {
  return (
    <section className={`projects-section ${props.darkMode && "dark-mode"}`}>
      <h2 className="text-center">Projects</h2>
      <div className="container mt-4">
        <div className="row justify-content-center">
          {ProjectsData.map((project, index) => (
            <div
              className="col-md-3 mb-4 fade-in d-flex justify-content-center"
              key={index}
            >
              <div className="card project-card">
                <div className="card-body text-center">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-description">{project.description}</p>
                  <ul className="list-inline tools-used">
                    {project.tools.map((tool, i) => (
                      <li key={i} className="list-inline-item">
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    className={`btn ${
                      props.darkMode
                        ? "btn-outline-light"
                        : "btn-outline-secondary"
                    }`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
