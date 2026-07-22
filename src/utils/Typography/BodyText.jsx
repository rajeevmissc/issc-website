import React from "react";

const BodyText = ({ children, className = "" }) => {
  return (
    <p className={`text-base md:text-md font-normal text-gray-700 leading-relaxed tracking-wide font-sans ${className}`}>
      {children}
    </p>
  );
};

export default BodyText;
