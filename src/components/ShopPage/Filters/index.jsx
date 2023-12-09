import React, { useEffect, useRef, useState } from "react";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import CategoriesFilter from "./CategoriesFilter";
import "./filters.scss";
import SizeFilter from "./SizeFilter";
import useShopContext from "../../../context/ShopContext";
import Overlay from "../../Overlay/Overlay";

const ShopFilters = () => {
  const { filterMenuActive, setFilterMenuActive } = useShopContext();

  return (
    <>
      <div className="filters" data-active={filterMenuActive}>
        <CategoriesFilter />
        <BrandFilter />
        <SizeFilter />
        <PriceFilter />
        <ColorFilter />
      </div>
      <Overlay
        active={filterMenuActive}
        onClick={() => setFilterMenuActive(false)}
      />
    </>
  );
};

export default ShopFilters;
