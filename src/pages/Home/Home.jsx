import BestSellerProducts from "../../components/HomePage/BestSellerProducts";
import FloatingProducts from "../../components/HomePage/FloatingProducts";
import Landing from "../../components/HomePage/Landing";
import "./home.scss";

export default function Home() {
  return (
    <main id="home">
      <Landing />
      <FloatingProducts />
      <BestSellerProducts />
    </main>
  );
}
