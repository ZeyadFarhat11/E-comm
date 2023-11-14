import React from "react";
import useShopContext from "../../context/ShopContext";
import ProductBox from "../ProductBox/ProductBox";

const ProductsList = () => {
  console.log("Products List Render");
  const { previewMode, products } = useShopContext();
  if (previewMode === "grid") {
    return (
      <div className="products">
        <div className="products-grid">
          {products.map((product) => (
            <ProductBox key={product.id} {...product} animated />
          ))}
        </div>
      </div>
    );
  }
};

export default ProductsList;
