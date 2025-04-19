import React from "react";

export const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200">
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
