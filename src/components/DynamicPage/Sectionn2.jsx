import React from 'react';
import image3 from '../../assets/image6.JPG';
import image4 from '../../assets/image4.JPG';
import { backOut, motion } from 'framer-motion';


const Sectionn2 = ({location}) => {
  const text =location.AboutDescription
  

return (
  <>
  <div className='flex-wrap overflow-x-hidden'>
    <div className="border-t-[1px] border-zinc-300 mt-20 flex flex-wrap justify-between items-center ">
      <div className="flex justify-stretch gap-96 mt-5">
        <h3 className="border rounded-xl p-2 ml-4 text-sm transition duration-300 ease-in-out hover:bg-[#9a1d20] hover:text-[#F5F5DC] cursor-pointer lg:block hidden">
          Empowering Youth
        </h3>
        <h3 className="border rounded-xl p-2 ml-4 text-sm transition duration-300 ease-in-out hover:bg-[#9a1d20] hover:text-[#F5F5DC] cursor-pointer lg:block hidden">
          Environmental Action
        </h3>
        <h3 className="border rounded-xl p-2 ml-4 text-sm transition duration-300 ease-in-out hover:bg-[#9a1d20] hover:text-[#F5F5DC] cursor-pointer lg:block hidden">
          Community Development
        </h3>
      </div>
    </div> 
    <div>
      <h2 className='text-[#36454F] text-center flex-wrap  text-xl md:text-3xl font-bold mt-10'>{location.AboutTitle}</h2>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 3,
        delay: 0.2,
      }}
      className="mt-5  md:h-[80vh] h-[60vh] w-full"
    >
      <div className="lg:grid grid-cols-2 flex-wrap gap-8 p-10 mt-10 ">
          <motion.div
          initial={{opacity:0,x:-30}}
          whileInView={{opacity:1,x: 50}}
        transition={{
          duration: 1,
          delay: 1,
          ease: backOut,
        }}
          
          >
            <div className=' container flex justify-stretch flex-wrap md:gap-2'>
             
        <img
          src={`https://map-backend-eight.vercel.app/uploads/${location.AboutImage1.replace('\\', '/')}`}
          className="md:h-72 md:w-72 w-32 h-32 object-cover border-4 border-white shadow-lg rounded-lg p-2"
          alt="Protest Scene"
        />
       
       
        <img src={`https://map-backend-eight.vercel.app/uploads/${location.AboutImage2.replace('\\', '/')}`} className="md:h-60 md:w-60 w-32 h-32 object-cover mt-20 border-4 border-white shadow-lg rounded-lg p-2"
          alt="Protest Scene" />
        
          </div>
      
        </motion.div>
        <div>
        <h2 className='text-[#9a1d20] md:text-2xl text-xl font-bold underline '>About</h2>
        <div className="mt-6 mr-10 text-justify">
          {text.split(' ').map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                 // Stagger animation for each word
              }}
              viewport={{ once: false, amount: 0.5 }} // Trigger animation while scrolling
              className="font-normal md:text-xl text-base flex-wrap text-[#343434] tracking-tight inline-block text-justify"
            >
              {item}<span className='text-white'>.</span>
            </motion.span>
          ))}
        </div>
      </div>
      </div>
    </motion.div>
    </div>
  </>
);
};
export default Sectionn2;
