import React, { useState } from "react";
import TabImageOne from "../../assets/images/illustration-features-tab-1.svg";
import TabImageTwo from "../../assets/images/illustration-features-tab-2.svg";
import TabImageThree from "../../assets/images/illustration-features-tab-3.svg";

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
        <div
          className={
            toggleState === 1
              ? "content-item active-content-item"
              : "content-item"
          }
        >
          <div className="content-left-item">
            <div className="features-image">
              <img className="features-image-front" src={TabImageOne}></img>
              <div className="features-image-back"></div>
            </div>
          </div>
          <div className="content-right-item">
            <div className="content-item-text">
              <h2 className="content-item-heading">Bookmark in one click</h2>
              <p className="content-item-description">
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </p>
              <div className="content-item-button">
                <button className="btn info-btn">More Info</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            toggleState === 2
              ? "content-item active-content-item"
              : "content-item"
          }
        >
          <div className="content-left-item">
            <div className="features-image">
              <img className="features-image-front" src={TabImageTwo}></img>
              <div className="features-image-back"></div>
            </div>
          </div>
          <div className="content-right-item">
            <div className="content-item-text">
              <h2 className="content-item-heading">Intelligent search</h2>
              <p className="content-item-description">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <div className="content-item-button">
                <button className="btn info-btn">More Info</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            toggleState === 3
              ? "content-item active-content-item"
              : "content-item"
          }
        >
          <div className="content-left-item">
            <div className="features-image">
              <img className="features-image-front" src={TabImageThree}></img>
            </div>
          </div>
          <div className="content-right-item">
            <div className="content-item-text">
              <h2 className="content-item-heading">Share your bookmarks</h2>
              <p className="content-item-description">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <div className="content-item-button">
                <button className="btn info-btn">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
