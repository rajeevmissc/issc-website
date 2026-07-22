import React from "react";

const SmallText = ({ children, className = "" }) => {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
};

export default SmallText;
