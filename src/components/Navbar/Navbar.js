import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiBookmark } from "react-icons/hi";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">
            <HiBookmark size={15} style={{ color: "white" }} />
          </div>
          <span style={click ? {color:"white"} : {color:"initial"}}>BOOKMARKS</span>
        </Link>
        <div className={click ? "nav-list active" : "nav-list"}>
          <Link to="/features" className="nav-link">
            FEATURES
          </Link>
          <Link href="/pricing" className="nav-link">
            PRICING
          </Link>
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
          <Link to="/login" className="login-btn">
            <button className="btn navbar-btn">LOGIN</button>
          </Link>
          <div className="social-links">
            <Link to="/" className="social-link">
              <AiFillFacebook size={30} style={{ color: "white" }} />
            </Link>
            <Link to="/" className="social-link">
              <AiOutlineTwitter size={30} style={{ color: "white" }} />
            </Link>
          </div>
        </div>
        <button onClick={handleClick} className="burger-menu">
          {click ? (
            <IoMdClose size={24} style={{ color: "white" }} />
          ) : (
            <GiHamburgerMenu size={24} style={{ color: "initial" }} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
