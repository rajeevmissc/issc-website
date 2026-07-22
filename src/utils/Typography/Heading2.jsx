import React from "react";

const Heading2 = ({ children, className = "" }) => {
  return <h2 className={`text-4xl font-bold text-gray-800 ${className}`}>{children}</h2>;
};

export default Heading2;
