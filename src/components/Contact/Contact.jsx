/* Contact.jsx */

import React from "react";
import "./Contact.css";

export default function Contact(props) {
  return (
    <section className="contact-section">
      <div className="contact-box">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Name:</strong> Abhishek Deshpande
          </p>
          <p>
            <strong>Email:</strong> abhidp55@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 7674841948
          </p>
          <p>
            <strong>Location:</strong> Hyderabad, India
          </p>
        </div>
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
