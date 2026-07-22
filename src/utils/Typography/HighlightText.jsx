import React from "react";

const HighlightText = ({ children, className = "" }) => {
  return <span className={`bg-yellow-200 px-2 py-1 rounded ${className}`}>{children}</span>;
};

export default HighlightText;
