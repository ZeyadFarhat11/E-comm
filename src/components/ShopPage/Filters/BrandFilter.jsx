import React from "react";
import { useSearchParams } from "react-router-dom";
import useShopContext from "../../../context/ShopContext";

const BrandFilter = () => {
  const { filterData } = useShopContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleBrand = (brand) => {
    const currentBrands = searchParams.getAll("brand");
    if (currentBrands.includes(brand)) {
      searchParams.delete("brand", brand);
    } else {
      searchParams.append("brand", brand);
    }
    setSearchParams(searchParams);
  };

  const deleteSelectedBrands = () => {
    setSearchParams(searchParams.delete("brand"));
  };

  return (
    <div className="filter">
      <h4 className="title">BRAND</h4>
      <ul className="brands-list">
        <li
          data-active={searchParams.get("brand") == null}
          onClick={deleteSelectedBrands}
        >
          <span className="label">All Brands</span>
          <span className="number">100</span>
        </li>
        {filterData.brands?.map(({ name, products }) => (
          <li
            key={name}
            data-active={searchParams.getAll("brand").includes(name)}
            onClick={() => toggleBrand(name)}
          >
            <span className="label">{name}</span>
            <span className="number">{products}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
