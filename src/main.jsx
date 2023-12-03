import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./context/CartContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </ChakraProvider>
  </BrowserRouter>
);
