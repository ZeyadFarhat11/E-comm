import React from "react";
import UserReview from "./UserReview";
import useAuthContext from "../../context/AuthContext";

function ReviewsTab({ product }) {
  const { user } = useAuthContext();

  const userReview = product.reviews.find(
    (review) => review.customer === user?.username
  );
  let reviews = [
    ...product.reviews.filter((review) => review.customer !== user?.username),
  ];

  if (userReview) {
    reviews.unshift(userReview);
  }

  return (
    <div className="reviews-tab">
      {reviews.map((review) => (
        <UserReview {...review} key={review.id} />
      ))}
    </div>
  );
}

export default ReviewsTab;
