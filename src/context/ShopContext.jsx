import React, { useContext, useEffect, useState } from "react";
import http from "../util/http";

const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("Name");
  const [limit, setLimit] = useState(12);
  const [previewMode, setPreviewMode] = useState("grid");
  const [totalProducts, setTotalProducts] = useState(120);
  const [priceFilterRange, setPriceFilterRange] = useState([0, 10000]);

  const [filterData, setFilterData] = useState({});

  const loadProducts = async () => {
    try {
      const res = await http.get(
        `/store/products/?limit=${limit}&offset=${(page - 1) * limit}`
      );
      setProducts(res.data.results);
      setTotalProducts(res.data.count);

      // setProducts(productsData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadProducts();
  }, [limit, page]);

  const loadFilterData = async () => {
    try {
      const res = await http.get("/store/product/data/");
      setFilterData({
        ...res.data,
        colors: res.data.colors.map((color) => color.name),
        sizes: res.data.sizes.map((size) => size.size),
      });
    } catch (err) {
      console.log("Load Filter Data Failed", err);
    }
  };

  useEffect(() => {
    loadFilterData();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        page,
        setPage,
        loading,
        setLoading,
        sortBy,
        setSortBy,
        limit,
        setLimit,
        previewMode,
        setPreviewMode,
        totalProducts,
        setTotalProducts,
        priceFilterRange,
        setPriceFilterRange,
        filterData,
        setFilterData,
        loadProducts,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
const useShopContext = () => useContext(ShopContext);

export default useShopContext;
