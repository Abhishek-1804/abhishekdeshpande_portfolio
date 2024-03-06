import React from "react";
import SkillData from "./SkillData";
import "./Skills.css";

export default function Skills(props) {
  return (
    <section className={`skills-section ${props.darkMode && "dark-mode"}`}>
      <div>
        <h1 className="section-title text-center">My Skills</h1>
      </div>
      <div className="skill-container">
        {SkillData.map((skill, index) => (
          <div className="skills-tile" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
