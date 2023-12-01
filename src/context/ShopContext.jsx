import React, { useContext, useEffect, useState } from "react";
import http from "../util/http";
import useShopUrl from "../hooks/useShopUrl";
import { useSearchParams } from "react-router-dom";

const ShopContext = React.createContext();

const defaults = {
  limit: 12,
  page: 1,
  sort: "rating",
};

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewMode, setPreviewMode] = useState("grid");
  const [totalProducts, setTotalProducts] = useState(120);
  const [priceFilterRange, setPriceFilterRange] = useState([0, 10000]);
  const [filterData, setFilterData] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();
  const getShopUrl = useShopUrl(defaults);

  useEffect(() => {
    getShopUrl();
  });

  const loadProducts = async () => {
    try {
      const res = await http.get(getShopUrl(), { sendToken: true });
      setProducts(res.data.results);
      setTotalProducts(res.data.count);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadProducts();
  }, [searchParams]);

  const loadFilterData = async () => {
    try {
      const res = await http.get("/store/product/data/");
      setFilterData({
        ...res.data,
        colors: res.data.colors.map((color) => color.name),
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
  }, [searchParams.get("page")]);

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        previewMode,
        setPreviewMode,
        totalProducts,
        setTotalProducts,
        priceFilterRange,
        setPriceFilterRange,
        filterData,
        setFilterData,
        loadProducts,
        defaults,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
const useShopContext = () => useContext(ShopContext);

export default useShopContext;
