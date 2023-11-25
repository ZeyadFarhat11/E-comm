import React from "react";
import useShopContext from "../../context/ShopContext";
import ProductBox from "../ProductBox/ProductBox";
import LandscapeProductBox from "../ProductBox/LandscapeProductBox";

const ProductsList = () => {
  const { previewMode, products, loading } = useShopContext();
  if (previewMode === "grid") {
    return (
      <div className="products">
        <div className="products-grid">
          {loading &&
            Array(6)
              .fill()
              .map((_, i) => <ProductBox.Placeholder key={i} />)}
          {!loading &&
            products.map((product) => (
              <ProductBox key={product.id} {...product} animated />
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className="products">
      <div className="products-list">
        {/* {loading &&
          Array(6)
            .fill()
            .map((_, i) => <ProductBox.Placeholder key={i} />)} */}
        {!loading &&
          products.map((product) => (
            <LandscapeProductBox key={product.id} {...product} animated />
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
