import React from "react";
import "./GiftingSection.css";
import giftingBg from "../assets/gifting-bg.png"; // replace with your background image

export default function GiftingSection() {
  return (
    <section 
      className="gifting-section"
      style={{ backgroundImage: `url(${giftingBg})` }}
    >
      <div className="gifting-overlay">
        <h2 className="gifting-heading">Here for a <br/> special <br/> someone? </h2>
        <p className="gifting-subtext">try custom gifting.</p>
      </div>
    </section>
  );
}
