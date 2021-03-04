import React from "react";
import ChromeLogo from "../../assets/images/logo-chrome.svg";
import FirefoxLogo from "../../assets/images/logo-firefox.svg";
import OperaLogo from "../../assets/images/logo-opera.svg";
import Fade from "react-reveal/Fade";

function ExtensionCard() {
  return (
    <section className="extension-card">
      <div className="extension-card-container">
        <div className="extension-card-header">
          <h1 className="extension-card-heading">Download the extension</h1>
          <p className="extension-card-description">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="extension-cards">

          <Fade left delay={200}>
            <div className="extension-card-item">
              <img
                className="extension-card-image"
                src={ChromeLogo}
                alt="Chrome Logo"
              ></img>
              <div className="extension-card-item-header">
                <h3 className="extension-card-item-heading">Add to Chrome</h3>
                <p className="extension-card-item-description">
                  Minimum version 62
                </p>
              </div>
              <div className="extension-card-item-button">
                <button className="btn extension-card-btn">
                  Add & Install Extension
                </button>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={300}>
            <div className="extension-card-item">
              <img
                className="extension-card-image"
                src={FirefoxLogo}
                alt="Firefox Logo"
              ></img>
              <div className="extension-card-item-header">
                <h3 className="extension-card-item-heading">Add to Firefox</h3>
                <p className="extension-card-item-description">
                  Minimum version 55
                </p>
              </div>
              <div className="extension-card-item-button">
                <button className="btn extension-card-btn">
                  Add & Install Extension
                </button>
              </div>
            </div>
          </Fade>

          <Fade right delay={400}>
            <div className="extension-card-item">
              <img
                className="extension-card-image"
                src={OperaLogo}
                alt="Opera Logo"
              ></img>
              <div className="extension-card-item-header">
                <h3 className="extension-card-item-heading">Add to Opera</h3>
                <p className="extension-card-item-description">
                  Minimum version 46
                </p>
              </div>
              <div className="extension-card-item-button">
                <button className="btn extension-card-btn">
                  Add & Install Extension
                </button>
              </div>
            </div>
          </Fade>


        </div>
      </div>
    </section>
  );
}

export default ExtensionCard;
