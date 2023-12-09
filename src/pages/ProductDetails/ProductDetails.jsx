import { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Placeholder from "../../components/ProductDetailsPage/Placeholder";
import ProductImagesPreview from "../../components/ProductDetailsPage/ProductImagesPreview";
import ProductInfo from "../../components/ProductDetailsPage/ProductInfo";
import RelatedProducts from "../../components/ProductDetailsPage/RelatedProducts";
import Tabs from "../../components/ProductDetailsPage/Tabs";
import useProductDetailsContext from "../../context/ProductDetailsContext";
import "./product-details.scss";

export default function ProductDetails() {
  const { product, loading } = useProductDetailsContext();

  return (
    <main id="product">
      <Breadcrumb injected>
        <Link to="/shop">Shop</Link>
        <span className="seperator">/</span>
        <span className="current">{product?.title}</span>
      </Breadcrumb>
      {loading ? (
        <Placeholder />
      ) : (
        <>
          <div className="container product">
            <ProductImagesPreview product={product} />
            <ProductInfo />
          </div>
          <div className="container">
            <Tabs product={product} />
          </div>
          <RelatedProducts />
        </>
      )}
    </main>
  );
}
