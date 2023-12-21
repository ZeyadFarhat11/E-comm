import React from "react";
import RCImage from "rc-image";
import { IoClose } from "react-icons/io5";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { GoZoomIn, GoZoomOut } from "react-icons/go";
import { LuFlipHorizontal2, LuFlipVertical2 } from "react-icons/lu";

const previewOptions = {
  icons: {
    close: <IoClose />,
    rotateLeft: <FaArrowRotateLeft />,
    rotateRight: <FaArrowRotateRight />,
    zoomIn: <GoZoomIn />,
    zoomOut: <GoZoomOut />,
    flipX: <LuFlipHorizontal2 />,
    flipY: <LuFlipVertical2 />,
  },
};
const Image = ({ src, alt, ...props }) => {
  return <RCImage src={src} alt={alt} preview={previewOptions} {...props} />;
};

export default Image;
