import React from "react";
import elevatePhoto from "@/assets/sections/elevate-photo.png";

const ElevateBanner = () => {
  return (
    <section className="w-full py-10 sm:py-14 md:py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10">
        <div
          className="relative w-full
            /* Mobile: taller ratio so image fills properly, no gray bars */
            aspect-[3/2]
            /* Small tablet: start going wider */
            sm:aspect-auto sm:h-[220px]
            md:h-[320px]
            lg:h-[400px]
            xl:h-[440px]
            rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[60px]
            overflow-hidden shadow-xl md:shadow-2xl
            border border-gray-100
            bg-black
            group transition-all duration-700 ease-in-out"
        >
          {/* Banner Image */}
          <img
            src={elevatePhoto}
            alt="Elevate Your Career"
            loading="lazy"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              object-center
              transition-transform duration-1000 ease-out
              group-hover:scale-105
            "
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-transparent
              opacity-80
              group-hover:opacity-60
              transition-opacity duration-700
              pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ElevateBanner;