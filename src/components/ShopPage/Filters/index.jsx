import React from "react";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";

const ShopFilters = () => {
  return (
    <div className="filters">
      <BrandFilter />
      <PriceFilter />
      <ColorFilter />
    </div>
  );
};

export default ShopFilters;
