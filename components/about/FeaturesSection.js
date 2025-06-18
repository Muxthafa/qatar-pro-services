// components/FeatureSection.tsx
import Image from "next/image";
import React from "react";

const FeatureSection = ({
  imageSrc,
  alt,
  iconClass,
  title,
  description,
  reverse = false,
}) => {
  return (
    <div className="bg-[#2C2C2C] rounded-lg overflow-hidden">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="md:w-1/2">
          <Image
            src={imageSrc}
            alt={alt}
            width={1500}
            height={700}
            style={{
              filter: "grayscale(100%) brightness(60%)",
            }}
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-[#F6F6F6] font-inter-tight-medium text-2xl mb-4">
            <i className={`${iconClass} text-[#DFFF4E] mr-3`}></i>
            {title}
          </h3>
          <p className="text-[#B1B1B1] font-inter-tight-regular text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
