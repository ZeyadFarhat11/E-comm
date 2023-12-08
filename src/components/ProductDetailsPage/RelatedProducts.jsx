import React, { useEffect } from "react";
import ProductBox from "../ProductBox/ProductBox";
import useProductDetailsContext from "../../context/ProductDetailsContext";
import { useState } from "react";

function RelatedProducts() {
  const { product } = useProductDetailsContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    http
      .get(`/store/products/?category=${product?.category}&limit=5`)
      .then((res) => {
        const products = res.data.results;
        setProducts(products.filter((p) => p.id !== product.id).slice(0, 4));
      })
      .catch(console.log);
  }, []);

  return (
    <section className="related-products">
      <h2 className="main-title">RELATED PRODUCTS</h2>
      <div className="container products-grid">
        {products.map((product) => (
          <ProductBox product={product} key={product.id} animated />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
