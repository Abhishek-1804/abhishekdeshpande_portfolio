import React, { useState } from "react";
import "./Work.css";
import workExperienceData from "./WorkExperienceData";
import { motion, AnimatePresence } from "framer-motion";

export default function Work(props) {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <section className="work-section">
      <h2 className="text-center">Work Experience</h2>
      <div className="container">
        <div className="row">
          {workExperienceData.map((experience, index) => (
            <motion.div
              key={index}
              className={`col-md-8 mx-auto mt-4 fade-in ${
                expandedCard === index ? "expanded col-md-12" : ""
              }`}
              initial={{ opacity: 0, width: "50%" }}
              animate={{
                opacity: 1,
                width: expandedCard === index ? "100%" : "60%",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => toggleCard(index)}
            >
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center my-3">
                    <div>
                      <h5 className="card-title">{experience.company}</h5>
                      <h6 className="card-subtitle text-muted">
                        {experience.title}
                      </h6>
                      <p className="card-text">{experience.date}</p>
                    </div>
                    <img
                      src={experience.logo}
                      alt="Company Logo"
                      className="company-logo"
                    />
                  </div>
                  {expandedCard === index ? (
                    <AnimatePresence>
                      <motion.ul
                        key="responsibilities"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {experience.responsibilities.map(
                          (responsibility, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {responsibility}
                            </motion.li>
                          )
                        )}
                      </motion.ul>
                    </AnimatePresence>
                  ) : (
                    <p className="click-to-expand">Click to view details</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
