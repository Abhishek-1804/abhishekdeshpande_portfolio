import React, { useState } from "react";
import "./Work.css";
import workExperienceData from "./WorkExperienceData";
import { motion, AnimatePresence } from "framer-motion";

export default function Work(props) {
  const [expandedCards, setExpandedCards] = useState([]);

  const toggleCard = (index) => {
    if (expandedCards.includes(index)) {
      // If the card is already expanded, remove it from the array
      setExpandedCards(expandedCards.filter((item) => item !== index));
    } else {
      // If the card is not expanded, add it to the array
      setExpandedCards([...expandedCards, index]);
    }
  };

  const isCardExpanded = (index) => {
    return expandedCards.includes(index);
  };

  return (
    <section className={`work-section ${props.darkMode && "dark-mode"}`}>
      <h2 className="text-center">Work Experience</h2>
      <div className="container">
        <div className="row">
          {workExperienceData.map((experience, index) => (
            <motion.div
              key={index}
              className={`mx-auto mt-4 fade-in ${
                isCardExpanded(index) ? "expanded col-md-12" : ""
              }`}
              initial={{ opacity: 0, width: "50%" }}
              animate={{
                opacity: 1,
                width: isCardExpanded(index) ? "100%" : "60%",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => toggleCard(index)}
            >
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center my-3">
                    <div>
                      <h5 className="card-title">{experience.company}</h5>
                      <h6 className="card-subtitle">{experience.title}</h6>
                      <p className="card-text">{experience.date}</p>
                    </div>
                    <img
                      src={experience.logo}
                      alt="Company Logo"
                      className="company-logo"
                    />
                  </div>
                  {isCardExpanded(index) ? (
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
