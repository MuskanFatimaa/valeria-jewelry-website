// src/pages/Home.js
import React from "react";
import LandingSection from "../components/LandingSection";
import LatestSection from "../components/LatestSection";
import CarouselSection from "../components/CarouselSection";
import GiftingSection from "../components/GiftingSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section id="landing">
        <LandingSection />
      </section>

      <section id="latest">
        <LatestSection />
      </section>

      <section id="carousel-gifting">
        <div
          style={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          {/* Carousel at the top, taking 1/3rd height */}
          <div style={{ flex: 1 }}>
            <CarouselSection />
          </div>

          {/* Gifting section below, taking 2/3rd height */}
          <div id="gifting" style={{ flex: 2 }}>
            <GiftingSection />
          </div>
        </div>
      </section>

      <section id="shop">
        <ProductsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="reviews">
        <ReviewSection />
      </section>

    </div>
  );
};

export default Home;
