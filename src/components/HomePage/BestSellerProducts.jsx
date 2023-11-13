import { useState } from "react";
import { products } from "../../data";
import ProductBox from "../ProductBox/ProductBox";
const tabs = ["all", "bags", "sneakers", "belt", "sunglasses"];
export default function BestSellerProducts() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

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
        <button className="load-more">load more</button>
      </div>
    </section>
  );
}
