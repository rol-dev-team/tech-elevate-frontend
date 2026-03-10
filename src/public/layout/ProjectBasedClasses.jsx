import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { projectData } from '../data/projectData';

const ProjectBasedClasses = () => {
  const { title, highlight, description, image } = projectData;

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white px-4 flex justify-center">
      <div className="max-w-[1200px] w-full mx-auto">
        {/* SHADOW & SHAPE ENHANCEMENT:
          - Uses border-2 border-[#d9f3eb] to match the 'Admission' and 'Webinar' glow.
          - shadow-[0_10px_50px_#d9f3eb] ensures the 100% color match you requested.
          - Asymmetrical rounding: Top-Left is heavily rounded on desktop.
        */}
        <div className="relative bg-white 
          rounded-[30px] md:rounded-[120px_40px_40px_40px] lg:rounded-[150px_40px_40px_40px]
          p-6 sm:p-10 md:p-14 lg:p-16
          shadow-[0_10px_50px_#d9f3eb] 
          flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 
          overflow-hidden"
        >
          
          {/* Illustration Side - Responsive Scaling */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-2 md:order-1">
            <div className="relative group">
              {/* Internal glow behind the image for extra highlight */}
              <div className="absolute inset-0 bg-[#d9f3eb]/40 blur-[60px] rounded-full scale-110 pointer-events-none"></div>
              
              <img 
                src={image} 
                alt="Project Based Classes Illustration" 
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain relative z-10 transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content Side - Responsive Typography */}
          <div className="w-full md:w-1/2 z-10 text-center md:text-left order-1 md:order-2">
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
            {/* <h2 className="font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              {title} <br className="hidden lg:block" />
              <span className="text-[#006f64] text-3xl md:text-6xl font-bold">{highlight}</span>
            </h2> */}
            
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-sm sm:max-w-md mx-auto md:mx-0">
              {description}
            </p>
          </div>

          {/* Decorative corner accent - matches Admission section */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#d9f3eb]/20 rounded-full blur-3xl -mt-16 -ml-16 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBasedClasses;