import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="Contact">
      <h2>Contact</h2>
      <p>
        N'hésitez-pas à me contacter pour toute demande ou information
        supplémentaire:
      </p>
      <p className="contactLiens">
        <a href="mailto:laurent.delay89@gmail.com">
          <i className="fas fa-envelope">
            <em>laurent.delay89@gmail.com</em>
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/laurent-delay/"
          target="_blank"
          rel="noreferrer"
          className="fab fa-linkedin"
        >
          <em>LinkedIn</em>
        </a>
        <a
          href="https://github.com/FrogZz-dev"
          target="_blank"
          rel="noreferrer"
          className="fab fa-github"
        >
          <em>GitHub</em>
        </a>
      </p>
    </section>
  );
}

export default Contact;
