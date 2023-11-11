import React from "react";
import useShopContext from "../../context/ShopContext";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { Select } from "antd";
const ToolBar = () => {
  const {
    sortBy,
    setSortBy,
    limit,
    setLimit,
    previewMode,
    setPreviewMode,
    totalProducts,
  } = useShopContext();

  const sortOptions = [
    { label: "Name", value: "name" },
    { label: "Rating", value: "rating" },
    { label: "Price", value: "price" },
  ];

  const limitOptions = [
    { value: "8", label: "8" },
    { value: "12", label: "12" },
    { value: "16", label: "16" },
    { value: "20", label: "20" },
  ];

  return (
    <div className="toolbar">
      <div className="left">
        <span>{totalProducts} items</span>
        <div>
          Sort By
          <Select
            defaultValue={"name"}
            options={sortOptions}
            onChange={(val) => setSortBy(val)}
          />
        </div>
        <div>
          Show
          <Select
            defaultValue={"12"}
            options={limitOptions}
            onChange={(val) => setLimit(val)}
          />
        </div>
      </div>
      <div className="right">
        <button
          onClick={() => setPreviewMode("grid")}
          data-active={previewMode === "grid"}
        >
          <BsFillGrid3X3GapFill />
        </button>
        <button
          onClick={() => setPreviewMode("list")}
          data-active={previewMode === "list"}
        >
          <BsListUl />
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
