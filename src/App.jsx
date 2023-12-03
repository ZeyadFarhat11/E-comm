import Header from "./Layout/Header/Header";
import "./assets/style/style.scss";
import Footer from "./Layout/Footer/Footer";
import AppRoutes from "./AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import http from "./util/http";

export default function App() {
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
