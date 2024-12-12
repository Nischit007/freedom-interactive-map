import React from 'react';
import ReactDOM from 'react-dom';
import './Popup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import { FaClockRotateLeft } from "react-icons/fa6";
const Modal = ({ isOpen, onClose, location }) => {


  const navigate=useNavigate();

  if (!isOpen || !location) return null;

  const imageUrl = location.heroSectionImage ? `http://localhost:8000/uploads/${location.heroSectionImage.replace('\\', '/')}` : 'fallback-image.jpg';

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-hidden">
      <div className="relative flex justify-center items-center mt-5 flex-wrap p-2">
        <div className="relative flex popup shadow-lg rounded-lg md:w-5/12 w-[40vh] border bg-white">
          {/* Close Button */}
          <button className='absolute top-1 right-4'
            onClick={onClose}      
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>

          <div className="md:flex flex-wrap">
            {/* Side Image */}
            <div className="side-image md:w-2/5 w-full">
              <img
                src={imageUrl}
                alt="Save Chure"
                className="object-cover w-full h-full rounded-l-lg"
              />
            </div>

            {/* Card Details */}
            <div className="card-details md:w-3/5 w-full p-4 space-y-2">
              {/* Title */}
              <h1 className="font-bold text-xl md:text-2xl">{location.momentIssue}</h1>

              {/* Location */}
              <div className="flex items-center text-gray-600">
                <i className="fa-solid fa-location-dot text-[#9A1D20] mr-2"></i>
                <h2 className="font-medium text-sm"> {location.province},{location.district}</h2>
              </div>

              {/* Description */}
              <p className="text-sm text-justify text-gray-700">
               {location.description}
              </p>
              <div className="flex items-center text-gray-600 gap-1">
              <FaClockRotateLeft className='text-[#9a1d20]'/>
              <span></span>
                <h2 className="font-medium text-sm"> {location.duration} </h2>
              </div>

              {/* Footer with Tag and Button */}
              <div className="flex justify-between items-center mt-4">
                <h2 className="text-sm font-medium text-gray-500">
                  <span>Organizer: </span>
                  {location.actors}
                </h2>
                <button
                onClick={() => navigate(`/dynamic/${location._id}`)}
                  className="bg-[#944546] text-white px-4 py-2 rounded-xl shadow-md 
                  hover:bg-[#8b3d3d] hover:scale-105 active:scale-95 
                  transition-transform duration-300 ease-in-out"
                >
                  Learn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;



