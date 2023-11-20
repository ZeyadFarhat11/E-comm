import React from "react";
import "./product-box.scss";

const LandscapeProductBox = ({
  title,
  rating,
  reviewsCount,
  price,
  discount,
  description,
  _id,
  img,
}) => {
  const [isCreatingReview, setIsCreatingReview] = useState(false);
  return <div>LandscapeProductBox</div>;
};

export default LandscapeProductBox;
