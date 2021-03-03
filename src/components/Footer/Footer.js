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
          <a href="">FEATURES</a>
          <a href="">PRICING</a>
          <a href="">CONTACT</a>
        </div>
        <div className="footer-social-link">
          <a href="">
            <AiFillFacebook size={30} style={{ color: "white" }} />
          </a>
          <a href="">
            <AiOutlineTwitter size={30} style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
