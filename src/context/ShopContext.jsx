import React, { useContext, useEffect, useState } from "react";
import { products as productsData } from "../data";

const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    loadProducts();
  }, []);

  return (
    <ShopContext.Provider
      value={{ products, setProducts, page, setPage, loading, setLoading }}
    >
      {children}
    </ShopContext.Provider>
  );
};
const useShopContext = () => useContext(ShopContext);
