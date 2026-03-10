import React from "react";
import PayGetyasImg from "@/assets/companylogo/payment-gateways.png";

const PaymentGateways = () => {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-20 px-4 flex justify-center items-center">
      <div
        className="relative w-full max-w-7xl border-2 border-[#006f64]/30 bg-[#fcfdfe]
          rounded-[32px_32px_60px_60px] 
          md:rounded-[32px_32px_100px_100px] 
          lg:rounded-[32px_32px_150px_150px]
          px-4 sm:px-10 md:px-16 py-14 md:py-16 lg:py-20 
          flex items-center justify-center shadow-[0_10px_40px_rgba(0,111,100,0.03)]"
      >
        {/* Responsive Floating Title 
            - md:whitespace-nowrap: Forces 1 line on MD/LG screens.
            - whitespace-normal: Allows wrapping on Mobile/Tab.
            - max-w-[280px]: Restricts width on mobile to force exactly 2 lines.
        */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 md:-top-4 bg-gray-50 px-3 md:px-6 w-max max-w-[280px] sm:max-w-[400px] md:max-w-none">
          <p className="text-center text-[11px] sm:text-sm md:text-lg font-bold text-gray-800 uppercase tracking-wide leading-tight whitespace-normal md:whitespace-nowrap">
            We accept all payment gateways 
            <br className="md:hidden" /> {/* Line break only for Mobile and Tablet */}
            powered by <span className="text-black">SSL Commerz</span>
          </p>
        </div>

        {/* Payment Logos - Centered Center */}
        <div className="w-full flex justify-center items-center">
          <img
            src={PayGetyasImg}
            alt="Payment Gateways"
            className="w-full max-w-6xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentGateways;

// import React from "react";
// import PayGetyasImg from "@/assets/sections/payment-gateways.png";

// const PaymentGateways = () => {
// return ( 
//     <section className="w-full bg-gray-50 py-12 md:py-16 px-4 flex justify-center">

//         <div 
//           className="relative w-full max-w-7xl border-2 border-[#006f64]/30 bg-[#fcfdfe]
//           rounded-[32px_32px_60px_60px] 
//           md:rounded-[32px_32px_100px_100px] 
//           lg:rounded-[32px_32px_150px_150px]
//           px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16 
//           flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_rgba(0,111,100,0.03)]"
//         >

//             {/* Title */}
//             <div className="absolute left-1/2 -translate-x-1/2 -top-3 md:-top-4 lg:-top-5 bg-gray-50 px-4 md:px-6">
//                 <p className="text-center text-xs sm:text-sm md:text-lg font-semibold text-gray-800 whitespace-nowrap">
//                     We accept all payment gateways powered by SSL Commerz
//                 </p>
//             </div>

//             {/* Payment Logos */}
//             <div className="flex justify-center items-center">
//                 <img
//                     src={PayGetyasImg}
//                     alt="Payment Gateways"
//                     className="w-full max-w-5xl h-auto object-contain"
//                 />
//             </div>

//         </div>

//     </section>
// );
// };

// export default PaymentGateways;
