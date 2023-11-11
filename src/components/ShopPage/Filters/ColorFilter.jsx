import React from "react";
import useShopContext from "../../../context/ShopContext";
import { transparentize } from "polished";
const ColorFilter = () => {
  const {
    colorFilterSelectedColor,
    setColorFilterSelectedColor,
    colorFilterColors,
  } = useShopContext();

  return (
    <div className="filter color-filter">
      <h4 className="title">Color</h4>
      <div className="colors">
        {colorFilterColors.map((color) => (
          <button
            key={color}
            className="color"
            style={{
              backgroundColor: color,
              outlineColor: transparentize(0.55, color),
            }}
            data-active={color === colorFilterSelectedColor}
            onClick={() => setColorFilterSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
