import React from "react";
// import Tabs from "../Tabs/Tabs";
import Tabs from '../Tabs/Tabs.jsx'

function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-heading">Features</h2>
          <p className="features-description">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <Tabs />
      </div>
    </section>
  );
}

export default Features;
