import AOS from "aos";
import "aos/dist/aos.css";
import "rc-image/assets/index.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import "./assets/style/style.scss";
import http from "./util/http";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    http
      .get("/store/products?limit=0")
      .catch(() => alert("Server is not running."));
  }, []);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
