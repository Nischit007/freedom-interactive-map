import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
    <div className='Footer mt-10'>
          <div className='bg-[#9A1D20] min-w-full md:h-52 h-60'>
             <h2 className='text-2xl text-center text-[#ffffff] font-serif  leading-tight p-7'>Freedom Studio</h2>
             <div className='Footer-txt flex flex-wrap justify-evenly'>
                <div className='space-y-1 text-[#ffffff]'>
                     <h3>New Baneshwor – 31, Kathmandu, Nepal</h3>
                     <h3>Email: contact@studiofreedom.org</h3>
                     <h3>​Contact No.: 9866567628</h3>
                </div>
                <div>
  <h2 className="mb-3 text-[#ffffff] ">Follow Us on Social Media</h2>
  <div className="flex  justify-center md:justify-start space-x-4 ">
    <a href="#" aria-label="Facebook" className="text-[#b9b9b9] hover:text-black">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#" aria-label="Instagram" className="text-[#b9b9b9] hover:text-black">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="#" aria-label="LinkedIn" className="text-[#b9b9b9] hover:text-black">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="#" aria-label="YouTube" className="text-[#b9b9b9] hover:text-black">
      <i className="fab fa-youtube"></i>
    </a>
    <a href="#" aria-label="Mail" className="text-[#b9b9b9] hover:text-black">
      <i className="fas fa-envelope"></i>
    </a>
  </div>
</div>

      </div>
             </div>
          </div>
    <p className='text-center flex-wrap font-light p-8 md:p-8'>​Copyright © 2024 <span className='opacity-45 hover:opacity-80 cursor-pointer'>Freedom Studio.</span> All rights reserved.</p>
    </>
  )
}

export default Footer