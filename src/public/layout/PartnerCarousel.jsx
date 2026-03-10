import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SectionHeader from '../components/SectionHeader';
// arrow icons
// import leftArrow from "@/assets/icons/left-arrow.png";
// import rightArrow from "@/assets/icons/right-arrow.png";

// Required Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const PartnerCarousel = ({ categories = [] }) => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-10">
        
        <SectionHeader 
            title={
              <>
                Course <span className='text-3xl md:text-6xl'>Categories</span>
              </>
            }
            // title="Course Categories"
            variant="teal"
            align="center"
            titleColor="text-[#001829]"
        />

        {/* 1. WRAPPER: Increased relative padding for desktop arrows */}
        <div className="relative mt-10 px-2 md:px-16 lg:px-20">
          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={categories.length >= 5}
            autoplay={{ 
                delay: 3000, 
                disableOnInteraction: false,
                pauseOnMouseEnter: true 
            }}
            navigation={{
              nextEl: '.custom-next-btn',
              prevEl: '.custom-prev-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
              1280: { slidesPerView: 5, spaceBetween: 40 },
            }}
            // REMOVE !static; use standard relative positioning logic
            className="mySwiper" 
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center group cursor-pointer py-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-10 h-10 md:w-14 md:h-14 object-contain" 
                    />
                  </div>
                  <h3 className="mt-4 text-[#01a79d] font-bold text-sm md:text-base text-center group-hover:text-[#2bb673] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 2. NAVIGATION ARROWS: Fixed positioning for MD/LG devices */}
          {/* Changed 'left-0' to '-left-2 md:left-2 lg:left-4' to ensure visibility */}
          <button className="custom-prev-btn absolute left-0 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-[10] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#2bb673] text-white rounded-full shadow-xl hover:bg-[#01a79d] transition-all active:scale-90 disabled:opacity-30 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button className="custom-next-btn absolute right-0 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-[10] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#2bb673] text-white rounded-full shadow-xl hover:bg-[#01a79d] transition-all active:scale-90 disabled:opacity-30 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;