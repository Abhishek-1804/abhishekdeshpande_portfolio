import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Skills.css";
import skillsData from "./SkillData";

export default function Skills(props) {
  return (
    <section className="skill-section">
      <div className="container">
        <h2 className="text-center">My Skills</h2>
        <div className="row">
          <div className="col-12">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              showStatus={false}
              emulateTouch={true}
              swipeable={true}
              centerMode={true} // Set centerMode to true
              centerSlidePercentage={20}
              slideSpacing={0}
              showThumbs={false}
              useKeyboardArrows={true}
              renderThumbs={() => {}}
              showIndicators={false}
              showArrows={true}
            >
              {skillsData.map((skill) => (
                <div key={skill.id}>
                  <div className="text-center skill-card">
                    <div className="skill-icon-container">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="img-fluid skill-icon"
                      />
                    </div>
                    <div className="skill-info">
                      <h3 className="skill-name">{skill.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
