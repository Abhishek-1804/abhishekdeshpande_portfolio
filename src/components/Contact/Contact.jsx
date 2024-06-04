import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact(props) {
  const hireMeEmail = "apdeshp4@asu.edu";
  const currentYear = new Date().getFullYear();

  return (
    <section className={`contact-section ${props.darkMode && "dark-mode"}`}>
      <div className="container">
        <div className="row">
          <h2 className="mb-4 text-center">Contact Me</h2>
          <div className="col-md-4 mx-auto">
            <div className="contact-box text-center">
              <ul className="list-unstyled contact-list">
                <li className="mb-3">
                  <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
                  <a href={`mailto:${hireMeEmail}`}>{hireMeEmail}</a>
                </li>
                <li className="mb-3">
                  <FontAwesomeIcon icon={faPhone} className="mx-2" />
                  +1(602)-670-1926
                </li>
                <li>
                  <FontAwesomeIcon icon={faMapMarker} className="mx-2" />
                  Phoenix, USA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-4">
        &copy; {currentYear} All rights reserved.
      </footer>
    </section>
  );
}
