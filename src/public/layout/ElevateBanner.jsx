// // ELEVATE YOUR CAREER
// import React from "react";
// import elevatePhoto from "@/assets/sections/elevate-photo.png";

// const ElevateBanner = () => {
//   return (
//     <section className="w-full py-10 sm:py-14 md:py-20 bg-white">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
//         <div
//           className="relative w-full
//             /* Aspect Ratio & Height */
//             aspect-[3/2]
//             sm:aspect-auto sm:h-[220px]
//             md:h-[320px]
//             lg:h-[400px]
//             xl:h-[440px]
//             /* Styling */
//             rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[60px]
//             overflow-hidden shadow-xl md:shadow-2xl
//             border border-gray-100
//             bg-black
//             /* Background Image Properties */
//             bg-cover bg-center bg-no-repeat
//             group transition-all duration-700 ease-in-out"
//           style={{
//             backgroundImage: `url(${elevatePhoto})`,
//           }}
//         >
//           {/* Note: Background image-এ transition scale (zoom effect) সরাসরি div-এ দেওয়া যায় না। 
//             যদি zoom effect চান, তবে নিচের মতো একটি জিরো-ইনডেক্সড ইনসেট ডিভ ব্যবহার করা ভালো।
//           */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
//             style={{ backgroundImage: `url(${elevatePhoto})` }}
//           />

//           {/* Gradient Overlay */}
//           <div
//             className="absolute inset-0
//               bg-gradient-to-t
//               from-black/60
//               via-transparent
//               to-transparent
//               opacity-80
//               group-hover:opacity-60
//               transition-opacity duration-700
//               pointer-events-none"
//           />
          
//           {/* আপনি চাইলে এখানে টেক্সট যোগ করতে পারেন */}
//           <div className="relative z-10 h-full flex items-center px-10">
//              {/* Content goes here */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ElevateBanner;


import React from "react";
import bannerImg from "@/assets/sections/elevate-photo.png";
import whiteLogo from "@/assets/tech-elevate-white-logo.png";

const ElevateBanner = ({ title = "ELEVATE YOUR CAREER" }) => {
  return (
    <section className="w-full py-6 sm:py-10 bg-base-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
          relative
          w-full
          min-h-[180px]
          sm:min-h-[240px]
          md:min-h-[300px]
          lg:min-h-[380px]
          xl:min-h-[420px]
          rounded-[28px]
          sm:rounded-[36px]
          lg:rounded-[48px]
          overflow-hidden
          flex
          items-center
          justify-center
          text-center
          "
        >

          {/* Background Image */}
          <img
            src={bannerImg}
            alt="Elevate Banner"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#063d2f]/80 via-[#0b3d2e]/70 to-[#063d2f]/80"></div>

          {/* Title */}
          <h1
            className="
            relative
            text-white
            uppercase
            font-extrabold
            tracking-[0.25em]
            px-4
            leading-tight

            text-[18px]
            sm:text-[26px]
            md:text-[38px]
            lg:text-[48px]
            xl:text-[60px]
            "
          >
            {title}
          </h1>

          {/* Bottom Logo */}
          <div
            className="
            absolute
            bottom-4
            sm:bottom-6
            md:bottom-8
            left-1/2
            -translate-x-1/2
            flex
            items-center
            justify-center
            "
          >
            <img
              src={whiteLogo}
              alt="Tech Elevate"
              className="
              h-6
              sm:h-8
              md:h-10
              lg:h-12
              object-contain
              opacity-95
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ElevateBanner;