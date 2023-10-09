import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingStars = ({ rating }) => {
  let stars = [];

  let ratingTemp = rating;
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<AiFillStar key={i} />);
    ratingTemp--;
  }
  if (ratingTemp >= 0.5) stars.push(<BsStarHalf key={10} />);

  for (let i = 0; i < 5 - Math.round(rating); i++) {
    stars.push(<AiOutlineStar key={i + 5} className="empty" />);
  }

  return <div className="rating-stars">{stars}</div>;
};

export default React.memo(RatingStars);
