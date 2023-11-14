import React from "react";
import { Skeleton } from "@chakra-ui/react";

function Placeholder() {
  return (
    <div className="container product">
      <div className="images-preview">
        <Skeleton style={{ aspectRatio: "1/1" }} rounded={10} />
        <div className="mini" style={{ marginTop: "15px" }}>
          <Skeleton style={{ aspectRatio: "1/1" }} rounded={6} />
          <Skeleton style={{ aspectRatio: "1/1" }} rounded={6} />
          <Skeleton style={{ aspectRatio: "1/1" }} rounded={6} />
          <Skeleton style={{ aspectRatio: "1/1" }} rounded={6} />
        </div>
      </div>
      <div className="product-info">
        <Skeleton height={5} width="50%" style={{ marginTop: "30px" }} />
        <Skeleton height={5} width="70%" style={{ marginTop: "15px" }} />
        <Skeleton height={5} width="50%" style={{ marginTop: "15px" }} />
        <Skeleton height={5} width="45%" style={{ marginTop: "15px" }} />
        <Skeleton height={5} width="40%" style={{ marginTop: "15px" }} />
        <div style={{ display: "flex", gap: "20px" }}>
          <Skeleton
            height={10}
            width="150px"
            style={{ marginTop: "30px" }}
            rounded={6}
          />
          <Skeleton
            height={10}
            width="150px"
            style={{ marginTop: "30px" }}
            rounded={6}
          />
        </div>
      </div>
    </div>
  );
}

export default Placeholder;
