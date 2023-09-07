/* Contact.jsx */

import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-box">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
          <p>
            <strong>Phone:</strong> +1234567890
          </p>
          <p>
            <strong>Location:</strong> Your City, Country
          </p>
        </div>
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
