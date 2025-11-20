import React from "react";
import "./Reviews.css";
import ReviewsHead from "./ReviewsHead";
const Reviews = () => {
  return (
    <div className="reviews">
      <ReviewsHead />
      <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/25471943"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Reviews;
