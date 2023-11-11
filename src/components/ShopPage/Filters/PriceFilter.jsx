import React from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import useShopContext from "../../../context/ShopContext";
const PriceFilter = () => {
  const { priceFilterRange, setPriceFilterRange } = useShopContext();
  return (
    <div className="filter price-filter">
      <h4 className="title">Price</h4>
      <p>
        <span>Ranger:</span>
        <span>
          ${priceFilterRange[0]} - ${priceFilterRange[1]}
        </span>
      </p>
      <RangeSlider
        onInput={(range) => setPriceFilterRange(range)}
        min={0}
        max={10000}
        step={10}
        defaultValue={priceFilterRange}
      />
    </div>
  );
};

export default PriceFilter;
