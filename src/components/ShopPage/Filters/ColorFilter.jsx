import React from "react";
import useShopContext from "../../../context/ShopContext";
import { transparentize } from "polished";
import { useSearchParams } from "react-router-dom";
const ColorFilter = () => {
  const { filterData } = useShopContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleColor = (color) => {
    const currentColors = searchParams.getAll("color");
    if (currentColors.includes(color)) {
      searchParams.delete("color", color);
    } else {
      searchParams.append("color", color);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="filter color-filter">
      <h4 className="title">Color</h4>
      <div className="colors">
        {filterData.colors?.map((color) => (
          <button
            key={color}
            className="color"
            style={{
              backgroundColor: color,
              outlineColor: transparentize(0.55, color),
            }}
            data-active={searchParams.getAll("color").includes(color)}
            onClick={() => toggleColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
