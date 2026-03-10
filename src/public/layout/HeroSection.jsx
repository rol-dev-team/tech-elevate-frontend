import React from 'react';
import { ShoppingCart, Calendar } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.png';
import EnrollIcon from "@/assets/icons/enroll.png";
import FreeSeminar from "@/assets/icons/calender.png";
// Import your component
import SectionHeader from '../components/SectionHeader';
import ActionButton from '../components/ActionButton';

const HeroSection = () => {
  const brandGreen = "#2bb673";
  const brandTeal = "#01a79d";

  const heroData = {
    titleMain: "Elevate your Career,",
    titleAccent: "Discover your Creativity",
    description: "With a vision to turn manpower into assets, Tech Elevate is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.",
    footerNote: "One of the best ISO certified IT Training Institutes in Bangladesh"
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10 py-10 md:py-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          {/* Using your SectionHeader for the Hero Title */}
          <SectionHeader 
            title={
              <>
                Elevate your <span className='text-3xl md:text-6xl'>Career,</span>
                <br />
                Discover your <span className='text-3xl md:text-6xl'>Creativity</span>
              </>
            }

            subtitle={heroData.description}
            align="left" // Hero sections usually look better left-aligned on desktop
            variant="teal"
            className="!mb-6" // Override margin for closer proximity to buttons
          />

          {/* Action Buttons Container */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
            <ActionButton 
                label="Enroll Now" 
                icon={<img src={EnrollIcon} alt="Enroll" className="w-full h-full object-contain" />} 
                variant="primary" 
                onClick={() => console.log("Navigate to Enrollment")} 
            />

            <ActionButton 
                label="Free Seminars" 
                icon={<img src={FreeSeminar} alt="Free Seminar" className="w-full h-full object-contain" />} 
                variant="primary" 
                // variant="outline" 
                onClick={() => console.log("Open Seminar Modal")} 
            />
          </div>

          {/* Footer Note logic remains the same */}
          <p className="mt-8 text-center lg:text-left text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-widest">
            {heroData.footerNote.split('IT').map((text, i) => (
              <React.Fragment key={i}>
                {text}
                {i === 0 && <>IT <br className="xs:hidden" /></>}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] lg:max-w-full">
            <div 
              className="absolute -inset-4 blur-3xl opacity-10 rounded-full"
              style={{ background: brandTeal }}
            ></div>
            <img
              src={heroBanner}
              alt="Hero Banner"
              className="relative w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;