import React from "react";
import useShopContext from "../../../context/ShopContext";
import { useSearchParams } from "react-router-dom";
const SizeFilter = () => {
  const { filterData, totalProducts } = useShopContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleSize = (size) => {
    const currentSizes = searchParams.getAll("size");
    if (currentSizes.includes(size)) {
      searchParams.delete("size", size);
    } else {
      searchParams.append("size", size);
    }
    setSearchParams(searchParams);
  };

  const deleteSelectedSizes = () => {
    searchParams.delete("size");
    setSearchParams(searchParams);
  };

  return (
    <div className="filter size-filter">
      <h4 className="title">Size</h4>
      <ul className="sizes-list">
        <li
          data-active={searchParams.get("size") == null}
          onClick={deleteSelectedSizes}
        >
          <span className="label">All Sizes</span>
          <span className="number">{totalProducts}</span>
        </li>
        {filterData.sizes?.map(({ size, products }) => (
          <li
            key={size}
            className="size"
            data-active={searchParams.getAll("size").includes(size)}
            onClick={() => toggleSize(size)}
          >
            <span className="label">{size}</span>
            <span className="number">{products}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeFilter;
