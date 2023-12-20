import React, { useRef } from "react";
import { useState } from "react";
import ReviewsTab from "./ReviewsTab";

function Tabs({ product }) {
  const [currentTab, setCurrentTab] = useState("description");
  let descriptionButtonRef = useRef();
  let reviewsButtonRef = useRef();
  let containerRef = useRef();

  let activeButton =
    currentTab === "description"
      ? descriptionButtonRef.current
      : reviewsButtonRef.current;

  const underlineStyles = {
    left:
      activeButton?.getBoundingClientRect().left -
      containerRef.current?.getBoundingClientRect().left,
    width: activeButton?.getBoundingClientRect().width,
  };

  return (
    <div className="product-tabs" ref={containerRef}>
      <header className="tabs-header">
        <button
          onClick={() => setCurrentTab("description")}
          data-active={currentTab === "description"}
          ref={descriptionButtonRef}
        >
          Product Description
        </button>
        <button
          onClick={() => setCurrentTab("reviews")}
          data-active={currentTab === "reviews"}
          ref={reviewsButtonRef}
        >
          Reviews
        </button>
        <span className="underline" style={underlineStyles} />
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
