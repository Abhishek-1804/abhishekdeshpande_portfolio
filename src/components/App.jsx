import React, { useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const workExpRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  function scrollToSection(sectionRef) {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // Function to handle navigation link clicks
  /*   when expression is passed from parent to child, it is being used in child carefree, however, 
   when a function is passed, it is getting triggered in child but executed in parent itself */
  function handleNavLinkClick(sectionName) {
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
  }

  return (
    <div>
      <Navbar
        selectedNav={handleNavLinkClick}
        setDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <section ref={homeRef} id="home">
        <Home darkMode={darkMode} />
      </section>
      <section ref={skillsRef} id="skills">
        <Skills darkMode={darkMode} />
      </section>
      <section ref={workExpRef} id="work-exp">
        <Work darkMode={darkMode} />
      </section>
      <section ref={projectsRef} id="projects">
        <Projects darkMode={darkMode} />
      </section>
      <section ref={contactRef} id="contact">
        <Contact darkMode={darkMode} />
      </section>
    </div>
  );
}
