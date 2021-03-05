import React from "react";
import EmailForm from "../Form/EmailForm";
import Bounce from "react-reveal/Bounce";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <Bounce top cascade>
          <div className="contact-header">
            <p className="contact-header-description">35.000+ ALREADY JOINED</p>
            <h2 className="contact-header-heading">
              Stay up-to-date with what we're doing
            </h2>
            <EmailForm />
          </div>
        </Bounce>
      </div>
    </section>
  );
}

export default Contact;
