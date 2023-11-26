import React, { useContext, useEffect, useState } from "react";
import http from "../util/http";
import { useParams } from "react-router-dom";
import useAuthContext from "./AuthContext";
import { getToken } from "../util/auth";

const ProductDetails = React.createContext();

export const ProductDetailsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const loadProductData = async () => {
    try {
      const res = await http.get(`/store/products/${id}`, {
        sendToken: !!getToken(),
      });
      setProduct(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  useEffect(() => {
    loadProductData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  return (
    <ProductDetails.Provider
      value={{ loading, setLoading, product, setProduct, loadProductData }}
    >
      {children}
    </ProductDetails.Provider>
  );
};
const useProductDetailsContext = () => useContext(ProductDetails);

export default useProductDetailsContext;
