import React from "react";
import "./Skills.css";
import skillsData from "./SkillData";
import SkillCard from "./SkillCard"; // Import the SkillCard component

export default function Skills(props) {
  return (
    <section className="skill-section">
      <div className="container">
        <h2 className="text-center">My Skills</h2>
        <div className="row">
          {skillsData.map((skill) => (
            <div key={skill.id} className="col-12 col-md-4 col-lg-3">
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
