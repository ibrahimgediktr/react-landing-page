import React from "react";
import { HiBookmark } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo-brand">
          <div className="footer-logo">
            <HiBookmark size={15} style={{ color: "white" }} />
          </div>
          <span>BOOKMARKS</span>
        </Link>
        <div className="footer-nav">
          <Link to="/features" className="footer-link">FEATURES</Link>
          <Link to="/pricing" className="footer-link">PRICING</Link>
          <Link to="/contact" className="footer-link">CONTACT</Link>
        </div>
        <div className="footer-social-link">
          <Link to="/">
            <AiFillFacebook size={30} style={{ color: "white" }} />
          </Link>
          <Link to="/">
            <AiOutlineTwitter size={30} style={{ color: "white" }} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
