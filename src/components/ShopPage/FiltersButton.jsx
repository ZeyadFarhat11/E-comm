import React from "react";
import { TbFilter } from "react-icons/tb";
import useShopContext from "../../context/ShopContext";

const FiltersButton = () => {
  const { setFilterMenuActive } = useShopContext();
  return (
    <div className="filter-btn" onClick={() => setFilterMenuActive(true)}>
      <TbFilter />
      Filter
    </div>
  );
};

export default FiltersButton;
