import React from "react";
import UserReview from "./UserReview";

function ReviewsTab({ product }) {
  return (
    <div className="reviews-tab">
      {product.reviews.map((review) => (
        <UserReview {...review} key={review.id} />
      ))}
    </div>
  );
}

export default ReviewsTab;
