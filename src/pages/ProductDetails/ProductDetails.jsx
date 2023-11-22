import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Placeholder from "../../components/ProductDetailsPage/Placeholder";
import ProductImagesPreview from "../../components/ProductDetailsPage/ProductImagesPreview";
import ProductInfo from "../../components/ProductDetailsPage/ProductInfo";
import RelatedProducts from "../../components/ProductDetailsPage/RelatedProducts";
import Tabs from "../../components/ProductDetailsPage/Tabs";
import useProductDetailsContext from "../../context/ProductDetailsContext";
import "./product-details.scss";

export default function ProductDetails() {
  const { id } = useParams();
  // const { product, loading } = useProductData(id);
  const { product, loading } = useProductDetailsContext();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
            <ProductInfo product={product} />
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
