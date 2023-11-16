import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import { ShopProvider } from "./context/ShopContext";
import GuestRoute from "./middleware/GuestRoute";
import Profile from "./pages/Account/Profile/Profile";
import Addresses from "./pages/Account/Addresses/Addresses";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
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
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/account/profile" element={<Profile />} />
      <Route path="/account/addresses" element={<Addresses />} />
    </Routes>
  );
};

export default AppRoutes;
