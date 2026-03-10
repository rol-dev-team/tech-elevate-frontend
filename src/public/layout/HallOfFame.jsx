import React from "react";
import SectionHeader from "@/public/components/SectionHeader.jsx"; 

// Asset Imports
import pathaoLogo from "@/assets/companylogo/pathao.png";
import waltonLogo from "@/assets/companylogo/walton.png";
import uberLogo from "@/assets/companylogo/uber.png";
import shebaLogo from "@/assets/companylogo/sheba.png";
import ucbLogo from "@/assets/companylogo/ucb.png";
import bCouncilLogo from "@/assets/companylogo/b-council.png";
import undpLogo from "@/assets/companylogo/undp.png";
import meghnaLogo from "@/assets/companylogo/meghna.png";
import ekhonLogo from "@/assets/companylogo/ekhon.png";
import rupayanLogo from "@/assets/companylogo/rupayan.png";
import jamunaLogo from "@/assets/companylogo/jamuna.png";
import prothomAloLogo from "@/assets/companylogo/prothom-alo.png";
import chorkiLogo from "@/assets/companylogo/chorki.png";
import shikhoLogo from "@/assets/companylogo/shikho.png";
import eblLogo from "@/assets/companylogo/eastern.png"; 
import ibnSinaLogo from "@/assets/companylogo/ibnsina.png"; 
import akijLogo from "@/assets/companylogo/akij.png"; 
import dblLogo from "@/assets/companylogo/dbl.png"; 

const clients = [
  { name: "Pathao", logo: pathaoLogo },
  { name: "Walton", logo: waltonLogo },
  { name: "Uber", logo: uberLogo },
  { name: "Sheba", logo: shebaLogo },
  { name: "UCB", logo: ucbLogo },
  { name: "British Council", logo: bCouncilLogo },
  { name: "UNDP", logo: undpLogo },
  { name: "Meghna", logo: meghnaLogo },
  { name: "Ekhon", logo: ekhonLogo },
  { name: "Rupayan City", logo: rupayanLogo },
  { name: "Jamuna TV", logo: jamunaLogo },
  { name: "Prothom Alo", logo: prothomAloLogo },
  { name: "Chorki", logo: chorkiLogo },
  { name: "Shikho", logo: shikhoLogo },
  { name: "Eastern Bank", logo: eblLogo },
  { name: "Ibn Sina", logo: ibnSinaLogo },
  { name: "Akij Group", logo: akijLogo },
  { name: "DBL Group", logo: dblLogo },
];

const HallOfFame = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 font-sans mb-6">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        
        {/* Section Header with tighter spacing to match image */}
        <div className="mb-12 md:mb-16">
          <SectionHeader 
            title={
                <span className="">
                    <span className="text-[#006A4E] text-3xl md:text-6xl font-bold">Hall of</span> Fame
                </span>
            }
            subtitle={
                <span className="text-xl md:text-2xl text-gray-800 font-normal">
                    Exclusive Clients
                </span>
            }
            variant="teal"
            align="center"
          />
        </div>

        {/* Grid Logic: 
            Using flex-wrap with justify-center for the logos ensures 
            that the last row (4 logos) is perfectly centered like in the image.
        */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 md:gap-x-20 md:gap-y-24">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="w-[140px] md:w-[180px] flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-[50px] md:max-h-[70px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;