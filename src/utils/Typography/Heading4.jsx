import React from "react";

const Heading4 = ({ children, className = "" }) => {
  return <h4 className={`text-2xl font-medium text-gray-600 ${className}`}>{children}</h4>;
};

export default Heading4;
