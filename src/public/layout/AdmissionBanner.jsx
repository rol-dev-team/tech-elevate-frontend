import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ActionButton from '../components/ActionButton';
import admissionImg from '@/assets/sections/admission.png';

const AdmissionBanner = () => {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* SHADOW & BORDER: Matches #d9f3eb soft glow from design photos */}
        <div className="relative bg-white 
          rounded-[30px] md:rounded-[40px] 
          p-8 md:p-14 
          shadow-[0_10px_50px_#d9f3eb] 
          flex flex-col md:flex-row items-center justify-between overflow-hidden"
        >
          
          {/* Text Content */}
          <div className="z-10 text-center md:text-left md:ml-10 mb-8 md:mb-0">
            {/* <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                <span className="text-[#006f64] font-bold">Admission</span> <br />
                <span className="text-gray-900 text-3xl md:text-5xl font-bold">Going On</span>
            </h2> */}
            <SectionHeader 
              title={
                <>
                  <span className="text-[#006f64] text-3xl md:text-6xl">Admission</span> <br />
                  <span className="text-gray-800">Going On</span>
                </>
              }
              align="left"
              className="md:!items-start !mb-2" // Overriding default centering and spacing
            />
            
            {/* This wrapper ensures the button centers on mobile 
                but stays left-aligned on medium (md) screens and up.
            */}
            <div className="flex justify-center md:justify-start">
                <ActionButton 
                label="Enroll Now" 
                variant="primary" 
                onClick={() => console.log("Navigate to Enrollment")} 
                className="shadow-lg shadow-[#006f64]/20 scale-90 md:scale-100 px-6 py-2.5 text-sm md:text-base"
                />
            </div>
          </div>

          {/* Illustration Area */}
          <div className="relative md:mr-10">
            <div className="absolute inset-0 bg-[#d9f3eb]/40 blur-[80px] rounded-full scale-125 pointer-events-none"></div>
            
            <img 
              src={admissionImg} 
              alt="Admission Illustration" 
              className="w-full max-w-[350px] md:max-w-[450px] h-auto object-contain relative z-10 transform transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d9f3eb]/30 rounded-full blur-3xl -mb-16 -mr-16 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionBanner;