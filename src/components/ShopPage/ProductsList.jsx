import React from "react";
import useShopContext from "../../context/ShopContext";
import ProductBox from "../ProductBox/ProductBox";
import LandscapeProductBox from "../ProductBox/LandscapeProductBox";
import { useSearchParams } from "react-router-dom";

const ProductsList = () => {
  const { products, loading, setProducts } = useShopContext();
  const [searchParams] = useSearchParams();
  console.log(products);
  if (searchParams.get("previewMode") !== "list") {
    return (
      <div className="products">
        <div className="products-grid">
          {loading
            ? Array(6)
                .fill()
                .map((_, i) => <ProductBox.Placeholder key={i} />)
            : products.map((product) => (
                <ProductBox
                  key={product.id}
                  product={product}
                  setProducts={setProducts}
                  animated
                />
              ))}
        </div>
      </div>
    );
  }
  return (
    <div className="products">
      <div className="products-list">
        {loading &&
          Array(6)
            .fill()
            .map((_, i) => <LandscapeProductBox.Placeholder key={i} />)}
        {!loading &&
          products.map((product) => (
            <LandscapeProductBox key={product.id} {...product} animated />
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
