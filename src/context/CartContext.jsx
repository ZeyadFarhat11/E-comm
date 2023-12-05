import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import http from "../util/http";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState();
  const [couponData, setCouponData] = useState();

  const loadCart = async () => {
    try {
      const res = await http.get("/cart/cart_item", {
        sendToken: true,
        redirect: false,
      });
      setCartItems(res.data.cart_item);
      setCouponData(res.data.coupon_data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        loading,
        setLoading,
        cartItems,
        setCartItems,
        couponData,
        setCouponData,
        loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default function useCartContext() {
  return useContext(CartContext);
}
