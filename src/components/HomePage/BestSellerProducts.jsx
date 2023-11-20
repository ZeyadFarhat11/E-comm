import { useState } from "react";
import { products } from "../../data";
import ProductBox from "../ProductBox/ProductBox";
import http from "../../util/http";
import { useEffect } from "react";
import { useRef } from "react";
const tabs = ["all", "bags", "shoes", "belts"];
export default function BestSellerProducts() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [products, setProducts] = useState([]);

  let category = currentTab === "all" ? "" : currentTab;

  const loadProducts = async () => {
    try {
      const res = await http.get(
        `/store/product/best_seller/?limit=${products.length ? 4 : 8}&offset=${
          products.length
        }&category=${category}`
      );
      setProducts((prev) => [...prev, ...res.data.results]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleTabChange = async () => {
    try {
      const res = await http.get(
        `/store/product/best_seller/?limit=8&category=${category}`
      );
      console.log(res);
      setProducts(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  let firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      handleTabChange();
    }
  }, [currentTab]);

  return (
    <section className="best-seller">
      <h2 className="main-title">best seller</h2>
      <div className="tabs" data-aos="fade-up">
        {tabs.map((tab, i) => (
          <button
            className="tab"
            key={tab}
            data-active={currentTab === tab}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="container">
        <div className="products-grid">
          {products.map((product) => (
            <ProductBox key={product.id} {...product} animated />
          ))}
        </div>
        <button className="load-more" onClick={loadProducts}>
          load more
        </button>
      </div>
    </section>
  );
}
