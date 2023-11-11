import React from "react";

const BrandFilter = () => {
  return (
    <div className="filter">
      <h4 className="title">BRAND</h4>
      <ul className="brands-list">
        <li data-active="true">
          <span className="label">All Brands</span>
          <span className="number">100</span>
        </li>
        <li>
          <span className="label">Nike</span>
          <span className="number">20</span>
        </li>
        <li>
          <span className="label">Adidas</span>
          <span className="number">20</span>
        </li>
        <li>
          <span className="label">H&M</span>
          <span className="number">20</span>
        </li>
      </ul>
    </div>
  );
};

export default BrandFilter;
