import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { webinarData } from '../data/webinarData';
import ActionButton from '../components/ActionButton'; // Using your custom component

const WebinarSection = () => {
  const { title, highlight, description, buttonText, image } = webinarData;

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white px-4 flex justify-center">
      <div className="max-w-[1200px] w-full mx-auto">
        {/* ENHANCED SHADOW & SHAPE:
          - border-2 border-[#d9f3eb]: Matches the crisp soft outline in your reference images.
          - shadow-[0_10px_50px_#d9f3eb]: Replicates the 100% same glow effect.
          - Asymmetrical rounding: Bottom-Right is heavily rounded (150px) on desktop.
        */}
        <div className="relative bg-white 
          rounded-[30px] md:rounded-[40px_40px_120px_40px] lg:rounded-[40px_40px_150px_40px]
          p-6 sm:p-10 md:p-14 lg:p-16 
          shadow-[0_10px_50px_#d9f3eb] 
          flex flex-col md:flex-row items-center gap-8 md:gap-12 
          overflow-hidden"
        >
          
          {/* Text Content Area - Responsive Typography */}
          <div className="w-full md:w-1/2 z-10 text-center md:text-left order-2 md:order-1">
            <SectionHeader 
              title={
                <>
                  <span className="text-gray-800">{title}</span> <br className="hidden lg:block" />
                  <span className="text-[#006f64] text-3xl md:text-6xl">{highlight}</span>
                </>
              }
              align="left"
              className="md:!items-start !mb-2" // Overriding default centering and spacing
            />
            
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 md:mb-10 max-w-sm sm:max-w-md mx-auto md:mx-0">
              {description}
            </p>

            {/* Using ActionButton for consistency with Admission section */}
            <div className="flex justify-center md:justify-start">
              <ActionButton 
                label={buttonText}
                variant="primary" 
                onClick={() => console.log("Navigate to Webinar")} 
                className="shadow-lg shadow-[#006f64]/20 scale-90 md:scale-100"
              />
            </div>
          </div>

          {/* Illustration Area - Responsive Scaling */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
            <div className="relative group">
              {/* Internal glow behind the illustration */}
              <div className="absolute inset-0 bg-[#d9f3eb]/50 blur-[70px] rounded-full scale-110 pointer-events-none"></div>
              
              <img 
                src={image} 
                alt="Webinar Seminar Illustration" 
                className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] h-auto object-contain relative z-10 transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Decorative corner accent - adjusted to #d9f3eb */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d9f3eb]/30 rounded-full blur-3xl -mb-16 -mr-16 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;