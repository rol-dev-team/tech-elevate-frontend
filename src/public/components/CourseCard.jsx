import React from 'react';
import { AlarmClock } from 'lucide-react';


const CourseCard = ({ image, title, price, duration, reviews, rating }) => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col transition-all duration-300 hover:shadow-xl group">
      {/* 1. Exact Image Height and Aspect */}
      <div className="relative h-50 md:h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>

      {/* 2. Professional Content Layout */}
      <div className="px-6 pt-2 pb-8 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[#00a79d] text-[11px] font-bold uppercase tracking-wider">All Course</span>
          <div className="flex items-center text-[#00a79d] text-[12px] font-medium">
            <span className="mr-1.5 text-[#00a79d] opacity-70"><AlarmClock className='h-4 w-4 font-bold'/></span> {duration}
          </div>
        </div>

        <h3 className="text-[19px] font-bold text-[#1a1a1a] mb-1 leading-tight min-h-[3rem]">
          {title}
        </h3>

        {/* 3. Small Star Rating Section */}
        <div className="flex items-center mb-1">
          <div className="flex text-[#ffb400] text-[16px] mr-2 font-bold">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? "fill-current" : "text-gray-200"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>

              </span>
            ))}
          </div>
          <span className="text-gray-400 text-[18px] font-medium">{reviews} Ratings</span>
        </div>

        {/* 4. Footer: Exact Price and Pill Button */}
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-50">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-bold text-[#2bb673] leading-none">{price}</span>
            <div className="flex justify-start items-end gap-2 leading-none">
              <p className="text-gray-900 font-bold text-[18px]">BDT</p>
              <p className="text-[8px] text-gray-600 uppercase font-bold tracking-tighter">Course Fee</p>
            </div>
          </div>
          {/* GRADIENT BUTTON: Transitions from Teal to Green */}
          <button className="bg-gradient-to-r from-[#01a79d] to-[#2bb673] hover:from-[#2bb673] hover:to-[#01a79d] text-white px-5 py-2 rounded-sm font-bold text-[13px] transition-all duration-500 shadow-sm active:scale-95">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;