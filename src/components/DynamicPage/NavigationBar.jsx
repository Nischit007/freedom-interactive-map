import {React, useState} from 'react'
import imagelogo from '../../assets/freedomLogo.PNG'



const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        {/* Logo */}
        <div className="logo flex items-center justify-center mt-6">
          <img src={imagelogo} alt="logo" className="md:w-48 md:h-24 w-32 h-16" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center justify-between relative z-50 ml-5">
          <button onClick={toggleMenu} className="text-xl">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden md:block">
          <div className="Navbar flex justify-center gap-12 mt-3 font-normal cursor-pointer font-sans text-sm">
            <h3 className="opacity-40 hover:opacity-80">HOME</h3>
            <h3 className="opacity-40 hover:opacity-80">ABOUT</h3>
            <h3 className="opacity-40 hover:opacity-80">INITIATIVES</h3>
            <h3 className="opacity-40 hover:opacity-80">MOVEMENTS</h3>
            <h3 className="opacity-40 hover:opacity-80">PROGRAMS</h3>
            <h3 className="opacity-40 hover:opacity-80">CONNECT</h3>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center space-y-5 text-center cursor-pointer">
           <button onClick={toggleMenu} className="absolute top-4 left-4 text-2xl">✖</button>
            <h3 className="opacity-40 hover:opacity-80 text-base absolute top-4">
              HOME
            </h3>
            <h3 className="opacity-40 hover:opacity-80 text-base absolute top-12" >
              ABOUT
            </h3>
            <h3 className="opacity-40 hover:opacity-80 text-base absolute top-20">
              INITIATIVES
            </h3>
            <h3 className="opacity-40 hover:opacity-80 text-base absolute top-28" >
              MOVEMENTS
            </h3>
            <h3 className="opacity-40 hover:opacity-80 text-base absolute top-36">
              PROGRAMS
            </h3>
            <h3 className="opacity-40 hover:opacity-80 text-base absolute top-44">
              CONNECT
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default NavigationBar;