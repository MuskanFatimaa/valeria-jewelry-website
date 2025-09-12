import React from "react";
import "./AboutSection.css";
import aboutImage from "../assets/about.png"; 

function AboutSection() {
  return (
    <section id="about" className="about-section">
      {/* Left - Text Content */}
      <div className="about-text">
        <h2 className="about-heading">
          <span className="line1">OUR</span>
          <span className="line2">PHILOSOPHY</span>
        </h2>
        <p className="about-description">
          At <italic> valeria </italic>, we believe true elegance is eternal.
          Every creation is crafted with devotion to artistry and enduring quality,
          designed not simply as adornment but as a legacy of love, grace, and memory. 
          Our philosophy is to transcend fleeting trends, offering jewellery that is timeless
          in beauty and lasting in spirit—treasures to be cherished today and passed on as heirlooms 
          for generations to come.
        </p>
      </div>

      {/* Right - Image */}
      <div className="about-image">
        <img src={aboutImage} alt="About Valeria" />
      </div>
    </section>
  );
}

export default AboutSection;
