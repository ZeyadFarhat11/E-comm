import React, { useContext, useEffect, useState } from "react";
import { products as productsData } from "../data";
import http from "../util/http";

const ShopContext = React.createContext();

const COLORS = ["blue", "red", "black", "yellow", "pink", "gray"];

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("Name");
  const [limit, setLimit] = useState(12);
  const [previewMode, setPerviewMode] = useState("grid");
  const [totalProducts, setTotalProducts] = useState(120);
  const [priceFilterRange, setPriceFilterRange] = useState([0, 10000]);
  const [colorFilterSelectedColor, setColorFilterSelectedColor] =
    useState("black");
  const [colorFilterColors, setColorFilterColors] = useState(COLORS);

  useEffect(() => {
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
    loadProducts();
  }, [limit, page]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [page]);

  return (
    <ShopContext.Provider
      value={{
        colorFilterSelectedColor,
        setColorFilterSelectedColor,
        colorFilterColors,
        setColorFilterColors,
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
        setPerviewMode,
        totalProducts,
        setTotalProducts,
        priceFilterRange,
        setPriceFilterRange,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
const useShopContext = () => useContext(ShopContext);

export default useShopContext;
