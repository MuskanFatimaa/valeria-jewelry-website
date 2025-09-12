import React from "react";
import "./Footer.css";
import footerImage from "../assets/footer-img.png"; // replace with your image

function Footer() {
  return (
    <footer id="footer" className="footer-section">
      {/* Left image */}
      <div className="footer-image">
        <img src={footerImage} alt="Valeria footer visual" />
      </div>

      {/* Center content */}
      <div className="footer-content">
        <h2 className="footer-heading">fancy a real connection? follow us</h2>
        <p className="footer-links">
          ig: @shopvaleria.co | fb: shopvaleria.co | email: shopvaleria@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
