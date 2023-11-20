import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./product-details.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../../data";
import ProductImagesPreview from "../../components/ProductDetailsPage/ProductImagesPreview";
import ProductInfo from "../../components/ProductDetailsPage/ProductInfo";
import Tabs from "../../components/ProductDetailsPage/Tabs";
import RelatedProducts from "../../components/ProductDetailsPage/RelatedProducts";
import Placeholder from "../../components/ProductDetailsPage/Placeholder";
import http from "../../util/http";

export default function ProductDetails() {
  const { id } = useParams();
  const { product, loading } = useProductData(id);
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

const useProductData = (productId) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const loadProductData = async () => {
    try {
      const res = await http.get(`/store/products/${productId}`);
      setProduct(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };
  console.log("Product =>", product);

  useEffect(() => {
    loadProductData();
  }, []);

  return { loading, setLoading, product, setProduct, loadProductData };
};
