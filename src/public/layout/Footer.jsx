// import React from "react";
// // Asset Imports
// import logoMain from '@/assets/tech-elevate-logo.png';
// import footerBorder from "@/assets/footer-border.png"; 
// import fbIcon from "@/assets/fb.png";
// import youtubeIcon from "@/assets/youtube.png";
// import linkedinIcon from "@/assets/linkedin.png";

// const Footer = () => {
//   // Configuration object for easy updates
//   const footerData = {
//     office: {
//       title: "Corporate Office",
//       address: "Evergreen Plaza, Shsheed Tajuddin Ahmed Avenue, Dhaka 1208",
//     },
//     license: "XXXXXXXXXXXXXXXXXXXX",
//     socials: [
//       { name: "Facebook", icon: fbIcon, link: "https://facebook.com" },
//       { name: "YouTube", icon: youtubeIcon, link: "https://youtube.com" },
//       { name: "LinkedIn", icon: linkedinIcon, link: "https://linkedin.com" },
//     ],
//     legalLinks: [
//       { name: "Press Release", link: "/press" },
//       { name: "Regulatory", link: "/regulatory" },
//       { name: "Terms & Conditions", link: "/terms" },
//     ],
//     copyrightYear: new Date().getFullYear(),
//     parentCompany: "RACE ONLINE LTD.",
//     parentCompanyUrl: "https://www.race.net.bd/"
//   };

//   return (
//     <footer className="w-full bg-white pt-10 pb-8 font-sans overflow-x-hidden mt-10">
      
//       {/* 1. TOP SECTION: Inside container to keep text aligned with website content */}
//       <div className="max-w-[1440px] container mx-auto px-4 lg:px-10">
//         <div className="flex flex-col md:flex-row justify-between items-end relative z-20 px-2">
          
//           {/* Left: Office Address */}
//           <div className="md:w-1/3 text-left">
//             <h3 className="text-black font-bold text-[18px] mb-1">
//               {footerData.office.title}
//             </h3>
//             <p className="text-[13px] leading-snug text-gray-700 max-w-[280px]">
//               {footerData.office.address}
//             </p>
//           </div>

//           {/* Center: Trade License */}
//           <div className="hidden md:block pb-12">
//              <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-medium">
//               Trade License No. 
//               <span className="text-[#3DB34A] font-bold ml-1">
//                 {footerData.license}
//               </span>
//             </p>
//           </div>

//           {/* Right: Social Icons */}
//           <div className="md:w-1/3 flex flex-col items-end">
//             <h3 className="text-black font-bold text-[18px] mb-2">Get Connected</h3>
//             <div className="flex gap-2">
//               {footerData.socials.map((social, index) => (
//                 <a 
//                   key={index} 
//                   href={social.link} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="hover:scale-110 transition-transform duration-200"
//                 >
//                   <img src={social.icon} alt={social.name} className="w-8 h-8 object-contain" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 2. MIDDLE SECTION: OUTSIDE the container for Edge-to-Edge width */}
//       <div 
//         className="relative w-full h-[70px] mt-[-45px] flex items-center justify-center"
//         style={{ 
//             backgroundImage: `url(${footerBorder})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//             backgroundSize: '100% 100%' // This ensures the border touches both sides perfectly
//         }}
//       >
//         <div className="absolute inset-0 flex flex-col items-center justify-center pt-10">
//           <div className="flex items-center">
//             <img 
//               src={logoMain} 
//               alt="Tech Elevate Logo" 
//               className="h-[47px] w-auto object-contain" 
//             />
//           </div>
//           <p className="mt-4 text-[11px] text-gray-400 font-medium">
//             Copyright © {footerData.copyrightYear}. All rights reserved by Tech Elevate
//           </p>
//         </div>
//       </div>

//       {/* 3. BOTTOM SECTION: Inside container for alignment */}
//       <div className="max-w-[1440px] container mx-auto px-4 lg:px-10">
//         <div className="flex flex-col md:flex-row justify-between items-center text-[12px] font-medium text-gray-400 mt-6 pt-6 px-2">
//           <div className="order-2 md:order-1 mt-4 md:mt-0">
//             Tech Elevate is a brand of{" "}
//             <a 
//               href={footerData.parentCompanyUrl} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-[#3DB34A] font-bold ml-1 hover:underline underline-offset-4 transition-all"
//             >
//               {footerData.parentCompany}
//             </a>
//           </div>

//           {/* Dynamic Legal Navigation */}
//           <div className="flex gap-8 lg:gap-14 uppercase tracking-[0.05em] order-1 md:order-2">
//             {footerData.legalLinks.map((link, index) => (
//               <a 
//                 key={index} 
//                 href={link.link} 
//                 className="hover:text-[#3DB34A] transition-colors duration-200"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
// Asset Imports
import logoMain from '@/assets/tech-elevate-logo.png';
import footerBorder from "@/assets/footer-border.png"; 
import fbIcon from "@/assets/fb.png";
import youtubeIcon from "@/assets/youtube.png";
import linkedinIcon from "@/assets/linkedin.png";

const Footer = () => {
  const footerData = {
    office: {
      title: "Corporate Office",
      address: "Evergreen Plaza, Shaheed Tajuddin Ahmed Avenue, Dhaka 1208",
    },
    license: "XXXXXXXXXXXXXXXXXXXX",
    socials: [
      { name: "Facebook", icon: fbIcon, link: "https://facebook.com" },
      { name: "YouTube", icon: youtubeIcon, link: "https://youtube.com" },
      { name: "LinkedIn", icon: linkedinIcon, link: "https://linkedin.com" },
    ],
    legalLinks: [
      { name: "Press Release", link: "/press" },
      { name: "Regulatory", link: "/regulatory" },
      { name: "Terms & Conditions", link: "/terms" },
    ],
    copyrightYear: new Date().getFullYear(),
    parentCompany: "RACE ONLINE LTD.",
    parentCompanyUrl: "https://www.race.net.bd/"
  };

  return (
    <footer className="w-full bg-white pt-12 pb-8 font-sans overflow-x-hidden mt-16">
      
      {/* 1. TOP SECTION */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end relative z-20 gap-y-10 md:gap-y-0">
          
          {/* Left: Office Address */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-[#1a1a1a] font-extrabold text-[19px] mb-2">
              {footerData.office.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-gray-600 mx-auto md:mx-0 max-w-[300px]">
              {footerData.office.address}
            </p>
          </div>

          {/* Center: Trade License (Visible on all devices now for consistency) */}
          <div className="pb-4 md:pb-14 order-3 md:order-none">
             <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold text-center">
              Trade License No. 
              <span className="text-[#2bb673] ml-1">
                {footerData.license}
              </span>
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end order-2 md:order-none">
            <h3 className="text-[#1a1a1a] font-extrabold text-[19px] mb-3">Get Connected</h3>
            <div className="flex gap-4">
              {footerData.socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-300 drop-shadow-sm"
                >
                  <img src={social.icon} alt={social.name} className="w-9 h-9 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE SECTION: The Trapezoid Logo Area */}
      {/* Mobile logic: mt-10 keeps space from the top section. 
          Desktop logic: mt-[-35px] creates the overlap.
      */}
      <div className="relative w-full mt-12 md:mt-[-35px] max-h-[45px] md:h-[70px] flex items-center justify-center">
        {/* Background Border Image layer */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
              backgroundImage: `url(${footerBorder})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '100% 100%' // Scalable coverage
          }}
        />
        
        {/* Logo and Copyright content layer */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-8 md:pt-12">
          <img 
            src={logoMain} 
            alt="Tech Elevate Logo" 
            className=" p-2 md:p-1
                /* Mobile: Scaled to a readable height, width adjusts automatically */
                h-[35px] w-[70px]
                
                /* Tablet (sm): Slightly larger height */
                sm:h-[32px] w-[70px]
                
                /* Desktop (md): Matches your 62px design requirement */
                md:h-[52px] w-auto
                
                /* Large Screens (lg): Keeps proportions stable */
                lg:h-[55px] w-auto
                
                /* Utilities */
                object-contain 
                mb-3 
                mx-auto md:mx-0
            " 
          />
          {/* <p className="text-[10px] md:text-[12px] text-gray-400 font-semibold tracking-wide text-center px-6">
            Copyright © {footerData.copyrightYear}. All rights reserved by Tech Elevate
          </p> */}
        </div>
      </div>


     {/* 3. BOTTOM SECTION: Legal, Copyright & Brand Parent */}
     <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mt-2 md:mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center gap-y-6 md:gap-y-0 pt-8 md:pt-10 pb-4">
            
            {/* 1. Brand Parent Info: Left on Desktop, Bottom on Mobile */}
            <div className="flex justify-center md:justify-start items-center gap-1 order-3 md:order-1 text-[12px] md:text-[13px] text-gray-500 font-medium">
            <span className="whitespace-nowrap">Tech Elevate is a brand of</span>
            <a 
                href={footerData.parentCompanyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#2bb673] font-extrabold hover:text-[#01a79d] transition-colors duration-300"
            >
                {footerData.parentCompany}
            </a>
            </div>

            {/* 2. Copyright Text: Always Center */}
            <div className="order-2 md:order-2 flex justify-center">
            <p className="text-[10px] md:text-[11px] text-gray-400 font-bold uppercase tracking-widest text-center border-y md:border-none border-gray-50 py-2 md:py-0">
                Copyright © {footerData.copyrightYear} <span className="hidden sm:inline">|</span> All rights reserved by Tech Elevate
            </p>
            </div>

            {/* 3. Legal Links: Right on Desktop, Top on Mobile */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 lg:gap-12 text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest order-1 md:order-3">
            {footerData.legalLinks.map((link, index) => (
                <a 
                key={index} 
                href={link.link} 
                className="hover:text-[#2bb673] transition-all duration-200 relative group"
                >
                {link.name}
                {/* Subtle underline hover effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#2bb673] transition-all duration-300 group-hover:w-full"></span>
                </a>
            ))}
            </div>

        </div>
     </div>
    </footer>
  );
};

export default Footer;