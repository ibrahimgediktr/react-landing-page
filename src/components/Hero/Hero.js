import React from "react";
import HeroImage from "../../assets/images/illustration-hero.svg";
import { motion } from "framer-motion";
import {
  heroTextContainer,
  heroTextItem,
  heroImageContainer,
  heroImageItem,
} from "../Animations/Animation";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <motion.div
            className="hero-text"
            variants={heroTextContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1 className="hero-text-heading" variants={heroTextItem}>
              A Simple Bookmark Manager
            </motion.h1>
            <motion.p className="hero-text-description" variants={heroTextItem}>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </motion.p>
            <motion.div className="hero-text-btn" variants={heroTextItem}>
              <button className="btn chrome-btn">Get it on Chrome</button>
              <button className="btn firefox-btn">Get it on Firefox</button>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-right">
          <motion.div
            className="hero-image"
            variants={heroImageContainer}
            initial="hidden"
            animate="show"
          >
            <motion.img
              className="hero-image-front"
              src={HeroImage}
              variants={heroImageItem}
            ></motion.img>
            <motion.div
              className="hero-image-back"
              variants={heroImageItem}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
