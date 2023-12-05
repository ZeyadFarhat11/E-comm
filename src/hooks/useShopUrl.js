import { useSearchParams } from "react-router-dom";
import http from "../util/http";

const useShopUrl = (defaults) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get("limit") || defaults.limit;
  const page = searchParams.get("page") || defaults.page;

  const getShopUrl = () => {
    const url = new URL(http.defaults.baseURL + `/store/products`);

    const brands = searchParams.getAll("brand");
    brands.forEach((brand) => url.searchParams.append("brand", brand));

    const categories = searchParams.getAll("category");
    categories.forEach((category) =>
      url.searchParams.append("category", category)
    );

    const colors = searchParams.getAll("color");
    colors.forEach((color) => url.searchParams.append("color", color));

    const sizes = searchParams.getAll("size");
    sizes.forEach((size) => url.searchParams.append("size", size));

    url.searchParams.set(
      "sort_by",
      "-" + (searchParams.get("sort") || defaults.sort)
    );

    url.searchParams.set("limit", limit);
    url.searchParams.set("offset", (page - 1) * limit);

    let priceRange = searchParams
      .get("priceRange")
      ?.split(",")
      .map((e) => +e);
    if (priceRange) {
      url.searchParams.set("price_min", priceRange[0]);
      url.searchParams.set("price_max", priceRange[1]);
    }

    return url.toString();
  };

  return getShopUrl;
};

export default useShopUrl;
