import React from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useSearchParams } from "react-router-dom";
const PriceFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const MIN = 0;
  const MAX = 10000;
  const STEP = 100;

  const range = searchParams
    .get("priceRange")
    ?.split(",")
    .map((e) => +e) || [MIN, MAX];

  const setPriceRange = (range) => {
    searchParams.set("priceRange", range.join(","));
    setSearchParams(searchParams);
  };

  return (
    <div className="filter price-filter">
      <h4 className="title">Price</h4>
      <p>
        <span>Ranger:</span>
        <span>
          ${range[0]} - ${range[1]}
        </span>
      </p>
      <RangeSlider
        onInput={setPriceRange}
        min={MIN}
        max={MAX}
        step={STEP}
        defaultValue={range}
      />
    </div>
  );
};

export default PriceFilter;
