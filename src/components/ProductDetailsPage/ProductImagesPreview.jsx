import { useState } from "react";
import Image from "rc-image";

export default function ProductImagesPreview({ product }) {
  const [activeImage, setActiveImage] = useState(product.img);
  const { imgs } = product;

  return (
    <div className="images-preview">
      <Image src={activeImage} alt={product.title} className="current-img" />
      <div className="mini">
        {[product.img, ...imgs].map((img, i) => (
          <img
            src={img}
            alt={product.title}
            key={i}
            data-active={img === activeImage}
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
