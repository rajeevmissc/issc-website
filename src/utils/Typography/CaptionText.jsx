import React from "react";

const CaptionText = ({ children, className = "" }) => {
  return <p className={`text-xs text-gray-400 ${className}`}>{children}</p>;
};

export default CaptionText;
