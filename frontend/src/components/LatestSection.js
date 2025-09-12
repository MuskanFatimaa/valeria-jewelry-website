import React from "react";
import "./LatestSection.css"; 
import maroonImg from "../assets/maroon.jpg"; 

function LatestSection() {
  return (
    <section className="latest-section">
      <div className="latest-image">
        <img
          src={maroonImg}
          alt="Latest Jewelry Collection"
        />
      </div>
      <div className="latest-content">
        <h2 className="latest-top">the</h2>
        <h3 className="latest-main">illicit</h3>
        <h4 className="latest-bottom">collection</h4>
      </div>
    </section>
  );
}

export default LatestSection;
