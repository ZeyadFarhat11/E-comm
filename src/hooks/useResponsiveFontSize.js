import { useEffect, useState } from "react";

export default function useResponsiveFontSize() {
  const getFontSize = () =>
    innerWidth < 450 ? "16px" : innerWidth < 768 ? "18px" : "20px";
  const [fontSize, setFontSize] = useState(getFontSize);

  useEffect(() => {
    const onResize = () => {
      setFontSize(getFontSize());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return fontSize;
}
