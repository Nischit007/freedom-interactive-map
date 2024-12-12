import React from 'react'
import freedomLogo from '../assets/FS white logo.png';

const InteractiveMapDescription = () => {
  return (
    <div class="h-screen">
    <div class="flex flex-col text-center">
        <img className='h-24 w-full object-cover' src={freedomLogo} alt=""/>
        <div className='space-y-3'>
      <div class=" text-center">
        <h2 class="text-4xl font-normal text-white ">Interactive Map</h2>
      </div>
      <p class="opacity-70 text-justify text-pretty  pl-7 pr-7 text-white ">Interactive Map is a digital platform that allows activists, social movement leaders, and concerned stakeholders to engage with geographical data of social movements updated weekly. By clicking on several features of the maps, users can access detailed information on movements, movements strategies and tactics, photos and videos etc. The map also consists of learning corner, a hub for activists to connect with movements and explore, learn effective activism tools and techniques for community mobilization. This digital solution is a unique platform for social movements in Nepal that foster a vibrant civic space in Nepal by digitally bridging activists with the necessary knowledge, capacity, and resources to organize and mobilize citizens in a strategic, creative, and non-violent manner.</p>
    </div>
  </div>  
  </div>
  )
}

export default InteractiveMapDescription