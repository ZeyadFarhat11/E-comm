import Header from "./Layout/Header/Header";
import "./assets/style/style.scss";
import Footer from "./Layout/Footer/Footer";
import AppRoutes from "./AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
