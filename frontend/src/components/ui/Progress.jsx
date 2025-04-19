import React from "react";

export const Progress = ({ value }) => {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
