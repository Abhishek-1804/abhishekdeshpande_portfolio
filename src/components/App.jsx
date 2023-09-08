import React, { useState, useRef } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const workExpRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle navigation link clicks
  const handleNavLinkClick = (sectionName) => {
    switch (sectionName) {
      case "home":
        scrollToSection(homeRef);
        break;
      case "skills":
        scrollToSection(skillsRef);
        break;
      case "work-exp":
        scrollToSection(workExpRef);
        break;
      case "projects":
        scrollToSection(projectsRef);
        break;
      case "contact":
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar handleNavLinkClick={handleNavLinkClick} />
      <section ref={homeRef} id="home" className="section-with-padding">
        <Home />
      </section>
      <section ref={skillsRef} id="skills" className="section-with-padding">
        <Skills />
      </section>
      <section ref={workExpRef} id="work-exp" className="section-with-padding">
        <Work />
      </section>
      <section ref={projectsRef} id="projects" className="section-with-padding">
        <Projects />
      </section>
      <section ref={contactRef} id="contact" className="section-with-padding">
        <Contact />
      </section>
    </div>
  );
}
