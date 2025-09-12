import React from "react";
import "./LandingSection.css";
import heroImage from "../assets/Image-bg.png";

const LandingSection = () => {
  return (
    <section 
      className="landing-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="landing-content">
        <h1 className="landing-title">valeria</h1>
        <p className="landing-subtitle">
          Everyday Essentials for <br />
          The Modern Woman.
        </p>
        <button className="landing-btn">Shop Now</button>
      </div>
    </section>
  );
};

export default LandingSection;
