import React from "react";
import useShopContext from "../../../context/ShopContext";
import { useSearchParams } from "react-router-dom";

const CategoriesFilter = () => {
  const { filterData } = useShopContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleCategory = (category) => {
    const currentCategories = searchParams.getAll("category");
    if (currentCategories.includes(category)) {
      searchParams.delete("category", category);
    } else {
      searchParams.append("category", category);
    }
    setSearchParams(searchParams);
  };

  const deleteSelectedCategories = () => {
    setSearchParams(searchParams.delete("category"));
  };

  return (
    <div className="filter">
      <h4 className="title">Categories</h4>
      <ul className="categories-list">
        <li
          data-active={searchParams.get("category") == null}
          onClick={deleteSelectedCategories}
        >
          <span className="label">All Categories</span>
          <span className="number">100</span>
        </li>
        {filterData.categories?.map((category) => (
          <li
            key={category.name}
            data-active={searchParams
              .getAll("category")
              .includes(category.name)}
            onClick={() => toggleCategory(category.name)}
          >
            <span className="label">{category.name}</span>
            <span className="number">{category.products}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesFilter;
