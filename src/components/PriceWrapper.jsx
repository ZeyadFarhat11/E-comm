import React from "react";

const PriceWrapper = ({ price, discount }) => {
  const oldPrice = (price / ((100 - discount) / 100)).toFixed(2);
  return (
    <div className="price-wrapper">
      <h3 className="price">${price}</h3>
      {!!discount && (
        <>
          <del>${oldPrice}</del>
          <span className="discount">{discount}% Off</span>
        </>
      )}
    </div>
  );
};

export default PriceWrapper;
