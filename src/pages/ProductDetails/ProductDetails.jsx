import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./product-details.scss";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data";
import ProductImagesPreview from "../../components/ProductDetailsPage/ProductImagesPreview";
import ProductInfo from "../../components/ProductDetailsPage/ProductInfo";
import Tabs from "../../components/ProductDetailsPage/Tabs";
import RelatedProducts from "../../components/ProductDetailsPage/RelatedProducts";

export default function ProductDetails() {
  const { id } = useParams();
  const { product, loading } = useProductData(id);
  if (loading) return "Loading...";
  return (
    <main id="product">
      <Breadcrumb injected>
        <Link to="/shop">Shop</Link>
        <span className="seperator">/</span>
        <span className="current">{product?.title}</span>
      </Breadcrumb>
      <div className="container product">
        <ProductImagesPreview product={product} />
        <ProductInfo product={product} />
      </div>
      <Tabs product={product} />
      <RelatedProducts />
    </main>
  );
}

const useProductData = (productId) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const loadProductData = async () => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setProduct(products[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadProductData();
  }, []);

  return { loading, setLoading, product, setProduct, loadProductData };
};
