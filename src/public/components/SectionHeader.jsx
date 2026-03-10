import React from 'react';

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center', 
  titleColor = 'text-gray-900',
  className = "" 
}) => {
  
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }[align];

  return (
    /* Decreased mb-10 to mb-4 to reduce space below the header */
    <div className={`flex flex-col mb-4 md:mb-6 px-2 ${alignmentClass} w-full ${className}`}>
      <div className="relative inline-block cursor-default">
        <h2 className={`text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-extrabold ${titleColor} leading-tight`}>
          {title}
        </h2>
      </div>

      {/* Subtitle with reduced top margin */}
      {subtitle && (
        <p className="mt-1 md:mt-2 text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-[90%] md:max-w-6xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;