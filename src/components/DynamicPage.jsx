import React, { useEffect, useState } from 'react'
import NavigationBar from './DynamicPage/NavigationBar'
import HeroSection from './DynamicPage/HeroSection'
import Sectionn2 from './DynamicPage/Sectionn2'
import Section3 from './DynamicPage/Section3'
import YouTubeLink from './DynamicPage/YouTubeLink'
import Footer from './DynamicPage/Footer'
import Marquee from './DynamicPage/Marquee'
import Gallerytext from './DynamicPage/Gallerytext'
import { useParams } from 'react-router-dom';
import axios from 'axios'
const DynamicPage = () => {
  const [location, setLocation] = useState(null);
  const { id } = useParams();  


    
    useEffect(() => {
      // Fetch data from the API
      axios.get(`https://map-backend-eight.vercel.app/api/locations/${id}`)
        .then(response => {
          console.log('API response:', response.data); // Log the API response
          setLocation(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [id]); // Re-run the effect when the locationId changes


    return (
      <>
        <NavigationBar />
        {location ? (
          <>
            <HeroSection location={location} />
            <Sectionn2 location={location} />
            <Gallerytext />
            <div className="mx-auto w-full md:h-screen h-[70vh] text-white flex justify-center items-center overflow-x-hidden bg-black">
              <Marquee location={location} />
            </div>
            <Section3 location={location} />
            <YouTubeLink location={location} />
          </>
        ) : (
          <div className="text-center text-white">Loading...</div>
        )}
        <Footer />
      </>
    );
  }   

export default DynamicPage
