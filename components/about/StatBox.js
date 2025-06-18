// components/StatBox.tsx
import React from "react";

const StatBox = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-[#DFFF4E] font-inter-tight-medium text-4xl mb-2">
        {value}
      </div>
      <div className="text-[#B1B1B1] font-inter-tight-regular">{label}</div>
    </div>
  );
};

export default StatBox;
