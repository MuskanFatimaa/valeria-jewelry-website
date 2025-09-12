// Navbar.js
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaBars, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen((s) => !s);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".menu-btn")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
const handleMenuLinkClick = (e, anchor) => {
  e.preventDefault();
  setIsOpen(false);

  const targetId = anchor.replace("#", "");
  const currentPath = window.location.pathname || "/";

  if (currentPath === "/" || currentPath === "") {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // ✅ update the URL hash without using global `history`
    window.location.hash = targetId;
    return;
  }

  // If not on home, navigate to home with hash
  navigate(`/${anchor}`);
};

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" className="brand">
          valeria
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-icon">
            <FaHome size={24} />
          </Link>
        </li>

        <li ref={dropdownRef}>
          <button
            className="nav-icon menu-btn"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            <FaBars size={24} />
          </button>

          {isOpen && (
            <div className="dropdown-menu" role="menu">
              {/* Internal in-page scroll links */}
              <a href="#shop" onClick={(e) => handleMenuLinkClick(e, "#shop")}>
                Shop
              </a>
              <a href="#about" onClick={(e) => handleMenuLinkClick(e, "#about")}>
                About Us
              </a>
              <a href="#gifting" onClick={(e) => handleMenuLinkClick(e, "#gifting")}>
                Gifting
              </a>
              <a href="#reviews" onClick={(e) => handleMenuLinkClick(e, "#reviews")}>
                Reviews
              </a>
              {/* If you have a separate contact route (or it's in-page), adapt as needed */}
              <a href="#footer" onClick={(e) => handleMenuLinkClick(e, "#footer")}>
                Contact
              </a>
            </div>
          )}
        </li>

        <li>
          <Link to="/cart" className="nav-icon">
            <FaShoppingCart size={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
