import React from "react";

const QuoteText = ({ children, className = "" }) => {
  return <blockquote className={`border-l-4 border-gray-500 pl-4 italic text-gray-700 ${className}`}>
    {children}
  </blockquote>;
};

export default QuoteText;
