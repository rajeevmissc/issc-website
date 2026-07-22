import React from "react";

const Heading6 = ({ children, className = "" }) => {
  return <h6 className={`text-lg font-normal text-gray-400 ${className}`}>{children}</h6>;
};

export default Heading6;
