import React from "react";
import "./Work.css";
import workExperienceData from "./WorkExperienceData";

export default function Work(props) {
  return (
    <section className="work-section">
      <h2 className="text-center">Work Experience</h2>
      <div className="container">
        <div className="row">
          {workExperienceData.map((experience, index) => (
            <div key={index} className="col-md-12 mt-4">
              <div className="card custom-rounded">
                <div className="card-body">
                  <h5 className="card-title">{experience.company}</h5>
                  <h6 className="card-subtitle text-muted">
                    {experience.title}
                  </h6>
                  <p className="card-text">{experience.date}</p>
                  <ul className="list-unstyled">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
