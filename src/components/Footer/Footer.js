import React, { useState } from "react";
import EmailForm from "../Form/EmailForm";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <p className="footer-top-description">35.000+ ALREADY JOINED</p>
          <h2 className="footer-top-heading">
            Stay up-to-date with what we're doing
          </h2>
          <EmailForm />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
