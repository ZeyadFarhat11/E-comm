import { useState } from "react";
import Image from "rc-image";

export default function ProductImagesPreview({ product }) {
  const [activeImage, setActiveImage] = useState(product.image);

  return (
    <div className="images-preview">
      <Image src={activeImage} alt={product.title} className="current-img" />
      <div className="mini">
        {[product.image, ...product.images].map((img, i) => (
          <img
            src={img}
            alt={product.title}
            key={i}
            data-active={img === activeImage}
            onClick={() => setActiveImage(img)}
            style={{
              width: `calc(100% / ${product.images.length + 1} - ${
                (product.images.length * 10) / (product.images.length + 1)
              }px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
