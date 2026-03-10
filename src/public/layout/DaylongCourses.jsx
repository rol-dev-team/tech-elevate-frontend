import React from 'react';
import SectionHeader from "@/public/components/SectionHeader.jsx";
// Assuming you have the image saved in your assets
import daylongImg from "@/assets/sections/daylong-illustration.png";

const DaylongSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Using your custom SectionHeader component */}
        <SectionHeader 
          title={<>Join Our <span className="font-extrabold text-3xl md:text-6xl text-black">Daylong Courses</span></>}
          subtitle="We have designed our courses with the most demanding professional skills. The knowledge, experience, and expertise gained through the program will ensure your desired job in the global market. From the list below you can enroll to any online or offline courses at any time."
          align="center"
          variant="teal" // Matches the #01a79d theme
        />

        {/* Illustration Container */}
        <div className="w-full max-w-5xl mt-4 flex justify-center">
          <div className="relative group overflow-hidden rounded-2xl">
            {/* Main Image */}
            <img 
              src={daylongImg} 
              alt="Join Our Daylong Courses Illustration" 
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
            
            {/* Subtle DaisyUI Overlay Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01a79d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaylongSection;