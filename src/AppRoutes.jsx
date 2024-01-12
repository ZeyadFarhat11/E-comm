import { Navigate, Route, Routes } from "react-router-dom";
import { ProductDetailsProvider } from "./context/ProductDetailsContext";
import { ShopProvider } from "./context/ShopContext";
import GuestRoute from "./middleware/GuestRoute";
import AddAddress from "./pages/Account/Addresses/AddAddress";
import Addresses from "./pages/Account/Addresses/Addresses";
import Profile from "./pages/Account/Profile/Profile";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Wishlist from "./pages/Account/Wishlist/Wishlist";
import Orders from "./pages/Account/Orders/Orders";
import UserRoute from "./middleware/UserRoute";
import CheckoutStatus from "./pages/CheckoutStatus/CheckoutStatus";
import { useEffect } from "react";

const NavigateToAdminPanel = () => {
  const adminUrl = import.meta.env.VITE_API_ORIGIN + "/admin/";
  useEffect(() => {
    window.open(adminUrl);
  }, []);
  return (
    <div className="container">
      <a
        href={adminUrl}
        style={{
          fontSize: "50px",
          textAlign: "center",
          fontWeight: "bold",
          display: "block",
          padding: "50px 0",
        }}
      >
        Admin Panel
      </a>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/cart"
        element={
          <UserRoute redirect="/login?redirect=/cart">
            <Cart />
          </UserRoute>
        }
      />
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/register"
        element={
          <GuestRoute>
            <Register />
          </GuestRoute>
        }
      />
      <Route
        path="/shop"
        element={
          <ShopProvider>
            <Shop />
          </ShopProvider>
        }
      />
      <Route
        path="/product/:id"
        element={
          <ProductDetailsProvider>
            <ProductDetails />
          </ProductDetailsProvider>
        }
      />
      <Route path="/account/profile" element={<Profile />} />
      <Route path="/account/orders" element={<Orders />} />
      <Route path="/account/addresses" element={<Addresses />} />
      <Route path="/account/addresses/add" element={<AddAddress />} />
      <Route path="/account/wishlist" element={<Wishlist />} />
      <Route
        path="/account/*"
        element={<Navigate replace to="/account/profile" />}
      />
      <Route
        path="/checkout-success"
        element={<CheckoutStatus status="success" />}
      />
      <Route
        path="/checkout-cancel"
        element={<CheckoutStatus status="cancel" />}
      />
      <Route path="/admin" element={<NavigateToAdminPanel />} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
