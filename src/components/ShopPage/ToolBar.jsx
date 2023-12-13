import { Select } from "antd";
import React from "react";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { TbFilter } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";
import useShopContext from "../../context/ShopContext";
const ToolBar = () => {
  const { totalProducts } = useShopContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const sortOptions = [
    { label: "Name", value: "title" },
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
            defaultValue={searchParams.get("sort_by")?.slice(1) || "rating"}
            options={sortOptions}
            onChange={(val) => {
              searchParams.set("sort", val);
              setSearchParams(searchParams);
            }}
          />
        </div>
        <div>
          Show
          <Select
            defaultValue={"12"}
            options={limitOptions}
            onChange={(val) => {
              searchParams.set("limit", val);
              searchParams.set("page", 1);
              setSearchParams(searchParams);
            }}
          />
        </div>
      </div>
      <div className="right">
        <button
          onClick={() => {
            searchParams.delete("previewMode");
            setSearchParams(searchParams);
          }}
          data-active={searchParams.get("previewMode") !== "list"}
        >
          <BsFillGrid3X3GapFill />
        </button>
        <button
          onClick={() => {
            searchParams.set("previewMode", "list");
            setSearchParams(searchParams);
          }}
          data-active={searchParams.get("previewMode") === "list"}
        >
          <BsListUl />
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
