import React from 'react';
import image13 from '../../assets/image13.JPG';
import image14 from '../../assets/image14.JPG';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Section3 = ({location}) => {
  return (
    <>
      <div className="bg-[#f7f9f9] min-h-[400px] mt-12 flex-wrap p-3">
        <div className="md:flex md:justify-evenly  md:gap-12 ">
          <img
            src={`https://map-backend-eight.vercel.app/uploads/${location.issuedDetailImage1.replace('\\', '/')}`}
            className="md:h-60 h-54 md:w-60 w-72 ml-10 md:ml-28 mt-7 object-cover rounded-lg"
          />
          <div className="space-y-4">
            <h1 className="font-bold md:text-3xl text-xl text-justify mt-20 md:tracking-tighter">
            {location.issuedDetailTitle}
            </h1>

            <p className="text-pretty antialiased font-sans opacity-70 text-justify m-2">
              {location.issuedDetailDescription} 
            </p>

            <a
              href="https://www.youtube.com/@freedomstudio4891"
              target="_blank"
              aria-label="Mail"
              className="text-[#9a1d20] hover:text-[#8b5354]"
            >
              <button className="text-[#F5F5DC] font-light bg-[#9a1d20] rounded-md p-1 mt-7">
                Watch our videos <i className="fa-solid fa-play text-lg text-[#F5F5DC]"></i>
              </button>
            </a>
          </div>
          <img
            src={`https://map-backend-eight.vercel.app/uploads/${location.issuedDetailImage2.replace('\\', '/')}`}
            className="h-52 w-52 object-cover mt-64 mr-28 rounded-lg lg:block hidden"
          />
        </div>
      </div>
    </>
  );
};


export default Section3;
