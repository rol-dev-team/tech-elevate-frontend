import React from 'react';
import SectionHeader from '../components/SectionHeader';

// Static imports for better bundling performance
import ciscoLogo from '@/assets/partners/cisco-logo.png';
import dellLogo from '@/assets/partners/dell-logo.png';
import fortinetLogo from '@/assets/partners/fortinet-logo.png';
import huaweiLogo from '@/assets/partners/huawei-logo.png';
import juniperLogo from '@/assets/partners/juniper-logo.png';
import microsoftLogo from '@/assets/partners/microsoft-logo.png';
import mikrotikLogo from '@/assets/partners/mikrotik-logo.png';
import vmwareLogo from '@/assets/partners/vmware-logo.png';

const PARTNERS_DATA = [
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Juniper', logo: juniperLogo },
  { name: 'Cisco', logo: ciscoLogo },
  { name: 'Huawei', logo: huaweiLogo },
  { name: 'Dell', logo: dellLogo },
  { name: 'Fortinet', logo: fortinetLogo },
  { name: 'Mikrotik', logo: mikrotikLogo },
  { name: 'VMware', logo: vmwareLogo },
];

const TechPartners = () => {
  return (
    <section className="w-full bg-white py-10 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        {/* Reusable Header matching your design system */}
        <SectionHeader 
          title={
            <>
              <span className="text-gray-800">Tech</span>
              <span className="text-3xl md:text-6xl"> Tech Partners</span>
            </>
          }
          align="center"
          variant="teal"
          className="!mb-12 md:!mb-16" // Overriding default centering and spacing
        />
        {/* <SectionHeader 
          title="Tech Partners" 
          align="center"
          variant="teal"
          className="!mb-12 md:!mb-16"
        /> */}

        {/* Responsive Container:
           - Uses flex-wrap and justify-center to match the 5/3 split in the photo
           - Adjusts width per item to control how many appear per line
        */}
        <div className="flex flex-wrap justify-center items-center gap-y-10 gap-x-6 md:gap-x-12 lg:gap-x-16 max-w-6xl mx-auto">
          {PARTNERS_DATA.map((partner, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center transition-all duration-500 hover:scale-110
                         w-[calc(50%-1.5rem)] sm:w-[calc(33.33%-2rem)] lg:w-[calc(20%-4rem)]"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                // grayscale by default, color on hover as per previous professional style
                className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPartners;