import React from "react";
import { Pagination } from "antd";
import useShopContext from "../../context/ShopContext";
import { useSearchParams } from "react-router-dom";

const PaginationBar = () => {
  const { totalProducts, defaults } = useShopContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || defaults.page;
  const limit = searchParams.get("limit") || defaults.limit;
  return (
    <Pagination
      current={page}
      onChange={(page) => {
        searchParams.set("page", page);
        setSearchParams(searchParams);
      }}
      total={totalProducts}
      pageSize={limit}
      showSizeChanger={false}
    />
  );
};

export default PaginationBar;
