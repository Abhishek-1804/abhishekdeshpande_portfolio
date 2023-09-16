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
                <a href={project.link} target="_blank">
                  <img
                    className="card-img-top"
                    src={project.imageSrc}
                    alt={project.name}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <div className="d-flex justify-content-between">
                    {project.link && (
                      <a
                        href={project.link}
                        className={`btn ${
                          props.darkMode
                            ? "btn-outline-light"
                            : "btn-outline-secondary"
                        }`}
                        target="_blank"
                      >
                        Source Code
                      </a>
                    )}
                    {project.view && (
                      <a
                        href={project.viewLink}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
