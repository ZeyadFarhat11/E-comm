import Banner from "../../components/HomePage/Banner";
import BestSellerProducts from "../../components/HomePage/BestSellerProducts";
import Features from "../../components/HomePage/Features";
import FloatingProducts from "../../components/HomePage/FloatingProducts";
import Landing from "../../components/HomePage/Landing";
import "./home.scss";

export default function Home() {
  return (
    <main id="home">
      <Landing />
      <FloatingProducts />
      <BestSellerProducts />
      <Banner />
      <Features />
    </main>
  );
}
