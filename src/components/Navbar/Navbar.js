import React, {useState} from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiBookmark } from "react-icons/hi";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
      setClick(!click)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">
            <HiBookmark size={15} style={{ color: "white" }} />
          </div>
          <span>BOOKMARKS</span>
        </Link>
        <div className={click ? "nav-list active" : "nav-list"}>
          <a href="" className="nav-link">
            FEATURES
          </a>
          <a href="" className="nav-link">
            PRICING
          </a>
          <a href="" className="nav-link">
            CONTACT
          </a>
          <Link to="/login" className="login-btn">
            <button className="btn navbar-btn">
                LOGIN
            </button>
          </Link>
          <div className="social-links">
            <a href="">
              <AiFillFacebook size={30} style={{color:"white"}} />
            </a>
            <a href="">
              <AiOutlineTwitter size={30} style={{color:"white"}} />
            </a>
          </div>
        </div>
        <button onClick={handleClick} className="burger-menu">
          <GiHamburgerMenu size={24} style={{ color: "white" }} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
