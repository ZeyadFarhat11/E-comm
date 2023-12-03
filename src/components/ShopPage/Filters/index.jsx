import React from "react";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import CategoriesFilter from "./CategoriesFilter";
import "./filters.scss";
import SizeFilter from "./SizeFilter";

const ShopFilters = () => {
  return (
    <div className="filters">
      <CategoriesFilter />
      <BrandFilter />
      <SizeFilter />
      <PriceFilter />
      <ColorFilter />
    </div>
  );
};

export default ShopFilters;
