import React, { useState } from "react";
import { motion } from "framer-motion";
import { FeaturesData } from "../../data/FeaturesData";

import {
  heroTextContainer,
  heroTextItem,
  heroImageContainer,
  heroImageItem,
} from "../Animations/Animation";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Simple Bookmarking
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Speedy Searching
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Easy Sharing
        </button>
      </div>

      <div className="content-tabs">
        {FeaturesData.map((features, index) => (
          <div
          key={index}
            className={
              toggleState === index + 1
                ? "content-item active-content-item"
                : "content-item"
            }
          >
            <motion.div className="content-left-item">
              <motion.div
                className="features-image"
                variants={heroImageContainer}
                initial="hidden"
                animate={toggleState === index + 1 ? "show" : "hidden"}
              >
                <motion.img
                  className="features-image-front"
                  src={features.image}
                  variants={heroImageItem}
                ></motion.img>
                <motion.div
                  className="features-image-back"
                  variants={heroImageItem}
                ></motion.div>
              </motion.div>
            </motion.div>
            <div className="content-right-item">
              <motion.div
                className="content-item-text"
                variants={heroTextContainer}
                initial="hidden"
                // If toggle state equal 1 , animation start
                animate={toggleState === index + 1 ? "show" : "hidden"}
              >
                <motion.h2
                  className="content-item-heading"
                  variants={heroTextItem}
                >
                  {features.heading}
                </motion.h2>
                <motion.p
                  className="content-item-description"
                  variants={heroTextItem}
                >
                  {features.description}
                </motion.p>
                <motion.div
                  className="content-item-button"
                  variants={heroTextItem}
                >
                  <button className="btn info-btn">More Info</button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
