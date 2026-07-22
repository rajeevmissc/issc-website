import React from "react";

const CodeText = ({ children, className = "" }) => {
  return <code className={`bg-gray-100 text-gray-800 px-2 py-1 rounded font-mono ${className}`}>{children}</code>;
};

export default CodeText;
