import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ShopFilters from "../../components/ShopPage/Filters";
import Banner from "../../components/HomePage/Banner";
import ToolBar from "../../components/ShopPage/ToolBar";
import ProductsList from "../../components/ShopPage/ProductsList";
import PaginationBar from "../../components/ShopPage/PaginationBar";
import "./shop.scss";
import FiltersButton from "../../components/ShopPage/FiltersButton";

const Shop = () => {
  return (
    <main id="shop">
      <Breadcrumb>Shop</Breadcrumb>
      <div className="container">
        <ShopFilters />
        <div>
          <Banner />
          <ToolBar />
          <ProductsList />
          <PaginationBar />
        </div>
      </div>
      <FiltersButton />
    </main>
  );
};

export default Shop;
