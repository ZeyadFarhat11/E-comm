import React from "react";
import { useState } from "react";
import ReviewsTab from "./ReviewsTab";

function Tabs({ product }) {
  const [currentTab, setCurrentTab] = useState("description");

  return (
    <div className="product-tabs">
      <header className="tabs-header">
        <button
          onClick={() => setCurrentTab("description")}
          data-active={currentTab === "description"}
        >
          Product Description
        </button>
        <button
          onClick={() => setCurrentTab("reviews")}
          data-active={currentTab === "reviews"}
        >
          Reviews
        </button>
      </header>
      <div className="tab-body">
        {currentTab === "description" ? (
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: product.description.replace(/\n/g, "<br /><br />"),
            }}
          />
        ) : (
          <ReviewsTab product={product} />
        )}
      </div>
    </div>
  );
}

export default Tabs;
