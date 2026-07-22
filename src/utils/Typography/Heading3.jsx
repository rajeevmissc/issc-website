import React from "react";

const Heading3 = ({ children, className = "" }) => {
  return <h3 className={`text-3xl font-semibold text-gray-700 ${className}`}>{children}</h3>;
};

export default Heading3;
