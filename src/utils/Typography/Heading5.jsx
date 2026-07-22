import React from "react";

const Heading5 = ({ children, className = "" }) => {
  return <h5 className={`text-xl font-medium text-gray-500 ${className}`}>{children}</h5>;
};

export default Heading5;
