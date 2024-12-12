import React from 'react';
import image1 from '../../assets/image10.JPG';

const HeroSection = ({location}) => {
  return (
    <>
      <section>
        <div className="flex relative mt-5 h-[500px] w-full">
          {/* Background Image */}
          <img src={`https://map-backend-eight.vercel.app/uploads/${location.heroSectionImage.replace('\\', '/')}`} className="md:w-full min-w-full h-full object-cover" alt="Background" />
          {/* Gradient Overlay */}
          <div className="absolute h-full w-full bg-gradient-to-r from-black/90 to-black/20"></div>
          
          {/* Content Overlay */}
          <div className="absolute ml-16 mt-32 space-y-5">
            <h1 className="md:text-6xl text-4xl text-[#F5F5DC] font-bold">{location.momentIssue}</h1>
              <div>
            <span className="font-serif bg-[#9a1d20] text-[#EDEADE] px-3 py-1 md:text-2xl text-lg">
              {location.momentSubTitle}
            </span>
            </div>
            <p className="text-[#EDEADE] text-xs md:text-base font-thin heading_paragraph opacity-70 w-[400px]">
              {location.momentSlogan}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
