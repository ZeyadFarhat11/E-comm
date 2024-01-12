import { useState } from "react";
import ProductBox from "../ProductBox/ProductBox";
import http from "../../util/http";
import { useEffect } from "react";
import { useRef } from "react";
const tabs = ["all", "Bags", "Shoes", "Belts"];
export default function BestSellerProducts() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [products, setProducts] = useState([]);

  let category = currentTab === "all" ? "" : currentTab;

  const loadProducts = async () => {
    try {
      let url = `/store/product/best_seller/?limit=${
        products.length ? 4 : 8
      }&offset=${products.length}`;
      if (category) url += `&category=${category}`;

      const res = await http.get(url, { sendToken: true });
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
      let url = `/store/product/best_seller/?limit=8`;
      if (category) url += `&category=${category}`;
      const res = await http.get(url, { sendToken: true });
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
            <ProductBox
              key={product.id}
              animated={true}
              setProducts={setProducts}
              product={product}
            />
          ))}
        </div>
        <button className="load-more" onClick={loadProducts}>
          load more
        </button>
      </div>
    </section>
  );
}
