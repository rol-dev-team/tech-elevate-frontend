import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { companyData } from '../data/companyData';

const ConnectedCompanies = () => {
  const { count, title, subtitle, image } = companyData;

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        
        {/* REPLACED WITH SECTIONHEADER */}
        <SectionHeader 
            title={
                <span className="">
                    <span className="text-[#006A4E] text-3xl md:text-6xl font-bold">{count}</span> {title}
                </span>
            }
            subtitle={
                <span className="text-xl md:text-2xl text-gray-800 font-normal">
                    {subtitle}
                </span>
            }
            variant="teal"
            align="center"
        />

        {/* Illustration Area */}
        <div className="relative group">
          {/* Subtle Background Glow behind the hands */}
          <div className="absolute inset-0 bg-[#01a79d]/5 blur-3xl rounded-full scale-110 pointer-events-none -z-10 group-hover:bg-[#01a79d]/10 transition-all duration-500"></div>
          
          <img 
            src={image} 
            alt="Connected Companies Illustration" 
            className="w-full max-w-[500px] h-auto object-contain transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default ConnectedCompanies;