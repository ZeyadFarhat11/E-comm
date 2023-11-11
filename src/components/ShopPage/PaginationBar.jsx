import React from "react";
import { Pagination } from "antd";
import useShopContext from "../../context/ShopContext";

const PaginationBar = () => {
  const { page, setPage, totalProducts, limit } = useShopContext();
  return (
    <Pagination
      current={page}
      onChange={(page) => setPage(page)}
      total={totalProducts}
      pageSize={limit}
      showSizeChanger={false}
    />
  );
};

export default PaginationBar;
