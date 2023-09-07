import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}
