import React from 'react';
import callIcon from "@/assets/icons/call.png";

const TopHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#2bb673] to-[#01a79d] text-white py-2 md:py-3 px-4 shadow-md">
      <div className="max-w-[1440px] mx-auto flex justify-center md:justify-end items-center">
        
        {/* Contact Info Group */}
        <div className="flex items-center gap-2 md:gap-4 group cursor-pointer">
          
          {/* Responsive Icon Container */}
          <div className="rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
            <img 
              src={callIcon} 
              alt="Call Icon" 
              className="w-3.5 h-3.5 md:w-8 md:h-8 object-contain" 
            />
          </div>
          
          {/* Responsive Phone Number Text */}
          <a 
            href="tel:+8801740400384"
            className="text-sm md:text-base lg:text-lg font-bold tracking-wider hover:underline transition-all"
          >
            +88 01740 400384
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default TopHeader;