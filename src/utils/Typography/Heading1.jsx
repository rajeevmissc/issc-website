import React from "react";

const Heading1 = ({ children, className = "" }) => {
  return <h1 className={`text-5xl font-extrabold text-gray-900 ${className}`}>{children}</h1>;
};

export default Heading1;
