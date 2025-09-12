import React from "react";
import "./ReviewSection.css";
import bgImage from "../assets/reviews-bg.jpg";  
import product1 from "../assets/reviewproduct1.jpg";
import product2 from "../assets/reviewproduct2.jpg";
import product3 from "../assets/reviewproduct3.png";

function ReviewSection() {
  const reviews = [
    {
      image: product1,
      name: "Ayesha Khan",
      text: "Absolutely stunning piece! The quality exceeded my expectations.",
    },
    {
      image: product2,
      name: "Maria Ahmed",
      text: "Elegant and timeless. I get compliments every time I wear it.",
    },
    {
      image: product3,
      name: "Sara Malik",
      text: "A true heirloom — worth every penny. I’ll cherish it forever.",
    },
  ];

  return (
    <section id="reviews"
      className="review-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background overlay */}
      <div className="review-overlay-bg"></div>

      <h2 className="review-heading">letters from our customers</h2>

      <div className="review-cards">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.image} alt={`Product ${index + 1}`} />
            <div className="review-hover">
              <h3 className="customer-name">{review.name}</h3>
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;
