// components/StepCard.tsx
import React from "react";

const StepCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#2C2C2C] p-6 rounded-lg">
      <div className="text-[#DFFF4E] text-4xl mb-4 text-center">
        <i className={icon}></i>
      </div>
      <h3 className="text-[#F6F6F6] font-inter-tight-medium text-xl mb-3 text-center">
        {title}
      </h3>
      <p className="text-[#B1B1B1] font-inter-tight-regular text-center">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
