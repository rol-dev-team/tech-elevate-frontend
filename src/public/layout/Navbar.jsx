import React, { useState } from 'react';
import NavLinks from './NavLinks'; 
import logoMain from '@/assets/tech-elevate-logo.png'; 
import pioneerBadge from '@/assets/pioneer.png';
import ActionButton from '../components/ActionButton';
import EnrollIcon from '@/assets/icons/enroll.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const brandGreen = "#2bb673";
  const brandTeal = "#01a79d";

  return (
    <nav className="bg-white sticky top-0 z-50 w-full">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        {/* Main Navbar Container */}
        <div className="flex justify-between items-center h-20 md:h-28">
          
          {/* 1. LEFT SECTION: Logo (Always stays left) */}
          {/* We set a min-width on desktop to keep the center nav balanced */}
          <div className="flex items-center gap-2 md:gap-6 lg:min-w-[300px]">
            <div className="flex flex-col items-start min-w-fit">
              <img 
                src={logoMain} 
                alt="Tech Elevate" 
                className="h-8 sm:h-8 md:h-10 lg:h-10 w-auto object-contain" 
              />
              <span className="text-[7px] xs:text-[9px] sm:text-[10px] md:text-[10px] lg:text-[10.5px] font-medium tracking-[0.07em] sm:tracking-[.1em] text-[#01a79d] uppercase mt-1 md:mt-2 leading-none whitespace-nowrap">
                A Brand of Race Online Ltd.
              </span>
            </div>

            {/* Hidden items on small screens */}
            <div className="hidden xl:block h-12 w-[1px] bg-gray-200 mx-2"></div>
            <img 
              src={pioneerBadge} 
              alt="Pioneer" 
              className="hidden sm:block h-5 md:h-8 lg:h-8 w-auto object-contain" 
            />
          </div>

          {/* 2. CENTER SECTION: 
              - Mobile: Shows the "Browse Course" button 
              - Desktop: Shows the NavLinks component
          */}
          <div className="flex-1 flex justify-center lg:flex-none">
            {/* Desktop NavLinks */}
            <div className="hidden lg:block">
              <NavLinks mobile={false} />
            </div>

            {/* Mobile Action Button (Centered) */}
            <div className="lg:hidden">
                <ActionButton 
                    label={
                    <>
                        Browse <span className="hidden min-[380px]:inline">Course</span>
                    </>
                    }
                    icon={<img src={EnrollIcon} alt="Enroll" className="w-full h-full object-contain" />}
                    variant="primary"
                    className="!px-2 !py-2 !text-[10px] xs:!text-xs !gap-1.5"
                    onClick={() => console.log("Mobile Course Browse")}
                />
            </div>
          </div>

          {/* 3. RIGHT SECTION: 
              - Mobile: Shows the Toggle (Hamburger) 
              - Desktop: Shows the full Action Button
          */}
          <div className="flex items-center justify-end lg:min-w-[300px]">
            {/* Desktop Action Button */}
            <div className="hidden lg:block">
                <ActionButton 
                    label="Browse Course" 
                    icon={<img src={EnrollIcon} alt="Enroll" className="w-full h-full object-contain" />}
                    variant="primary"
                    onClick={() => console.log("Opening Course Directory...")}
                />
            </div>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md ml-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

        </div>

        {/* MOBILE MENU: Animated Overlay */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <NavLinks mobile={true} setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;