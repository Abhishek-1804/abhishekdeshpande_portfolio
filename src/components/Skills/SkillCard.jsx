import React from "react";
import "./SkillCard.css"

export default function SkillCard(props) {
  const { name, icon } = props;

  return (
    <div className="skill-card">
      <img
        src={icon}
        alt={name}
        className="card-img-top skill-icon img-fluid"
      />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
      </div>
    </div>
  );
}
