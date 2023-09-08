import React from "react";
import "./Skills.css"; // Import your CSS file for styling

export default function Skills(props) {
  return (
    <section className="skill-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* prettier-ignore */}
            <div className="skill-scroll-wrapper">
              <div className="skill-scroll-container">
                <img src="./images/skillset/html.svg" alt="html" class="img-fluid skill-icon" />
                <img src="./images/skillset/css.svg" alt="css" class="img-fluid skill-icon" />
                <img src="./images/skillset/js.svg" alt="js" class="img-fluid skill-icon" />
                <img src="./images/skillset/aws.svg" alt="aws" class="img-fluid skill-icon" />
                <img src="./images/skillset/git.svg" alt="git" class="img-fluid skill-icon" />
                <img src="./images/skillset/colab.svg" alt="colab" class="img-fluid skill-icon" />
                <img src="./images/skillset/jupyter.svg" alt="jupyter" class="img-fluid skill-icon" />
                <img src="./images/skillset/opencv.svg" alt="opencv" class="img-fluid skill-icon" />
                <img src="./images/skillset/postgres.svg" alt="postgresql" class="img-fluid skill-icon" />
                <img src="./images/skillset/python.svg" alt="python" class="img-fluid skill-icon" />
                <img src="./images/skillset/powerbi.svg" alt="powerBI" class="img-fluid skill-icon" />
                <img src="./images/skillset/R.svg" alt="R" class="img-fluid skill-icon" />
                <img src="./images/skillset/tableau.svg" alt="tableau" class="img-fluid skill-icon" />
                <img src="./images/skillset/vscode.svg" alt="vscode" class="img-fluid skill-icon" />
                {/* <!-- Add more skill icons here as needed --> */}
              </div>
              <div className="skill-scroll-container">
                <img src="./images/skillset/html.svg" alt="html" class="img-fluid skill-icon" />
                <img src="./images/skillset/css.svg" alt="css" class="img-fluid skill-icon" />
                <img src="./images/skillset/js.svg" alt="js" class="img-fluid skill-icon" />
                <img src="./images/skillset/aws.svg" alt="aws" class="img-fluid skill-icon" />
                <img src="./images/skillset/git.svg" alt="git" class="img-fluid skill-icon" />
                <img src="./images/skillset/colab.svg" alt="colab" class="img-fluid skill-icon" />
                <img src="./images/skillset/jupyter.svg" alt="jupyter" class="img-fluid skill-icon" />
                <img src="./images/skillset/opencv.svg" alt="opencv" class="img-fluid skill-icon" />
                <img src="./images/skillset/postgres.svg" alt="postgresql" class="img-fluid skill-icon" />
                <img src="./images/skillset/python.svg" alt="python" class="img-fluid skill-icon" />
                <img src="./images/skillset/powerbi.svg" alt="powerBI" class="img-fluid skill-icon" />
                <img src="./images/skillset/R.svg" alt="R" class="img-fluid skill-icon" />
                <img src="./images/skillset/tableau.svg" alt="tableau" class="img-fluid skill-icon" />
                <img src="./images/skillset/vscode.svg" alt="vscode" class="img-fluid skill-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skillset-text">
        <h2>My Skills</h2>
      </div>
    </section>
  );
}
