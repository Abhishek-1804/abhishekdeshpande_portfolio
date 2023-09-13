import React, { useState } from "react";
import "./Projects.css";

export default function Projects(props) {
  return (
    <section className={`projects-section ${props.darkMode && "dark-mode"}`}>
      <h2 className="text-center">Projects</h2>
      <p className="text-center">coming soon...</p>
    </section>
  );
}
