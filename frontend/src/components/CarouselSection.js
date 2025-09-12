import React, { useRef, useEffect } from "react";
import "./CarouselSection.css";

import rings from "../assets/rings.jpg";
import earrings from "../assets/earrings.jpg";
import necklaces from "../assets/necklaces.jpg";
import anklets from "../assets/anklets.jpg";
import bracelets from "../assets/bracelets.jpg";

export default function JewelryCarousel() {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const images = [
    { src: rings, caption: "Shop All Rings", link: "/rings" },
    { src: necklaces, caption: "Shop All Necklaces", link: "/necklaces" },
    { src: bracelets, caption: "Shop All Bracelets", link: "/bracelets" },
    { src: earrings, caption: "Shop All Earrings", link: "/earrings" },
    { src: anklets, caption: "Shop All Anklets", link: "/anklets" },
  ];

  // add clones for infinite loop
  const slides = [
    ...images.slice(-3),
    ...images,
    ...images.slice(0, 3)
  ];

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      if (!carouselRef.current) return;
      carouselRef.current.scrollBy({ left: carouselRef.current.firstChild.offsetWidth + 16, behavior: "smooth" });
    }, 2500);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = carousel.firstChild.offsetWidth + 16;
    carousel.scrollLeft = cardWidth * 3;

    const handleScroll = () => {
      if (carousel.scrollLeft >= cardWidth * (images.length + 3)) {
        carousel.scrollLeft = cardWidth * 3;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = cardWidth * images.length;
      }
    };

    carousel.addEventListener("scroll", handleScroll);
    startAutoScroll();

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      stopAutoScroll();
    };
  }, []);

  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.firstChild.offsetWidth + 16;
    const scrollAmount = dir === "left" ? -cardWidth : cardWidth;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="carousel-section">
      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          {slides.map((item, i) => (
            <div key={i} className="carousel-card">
              <img src={item.src} alt={item.caption} />
              <a href={item.link} className="carousel-caption">{item.caption}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
