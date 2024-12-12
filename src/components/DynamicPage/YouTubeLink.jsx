import React from 'react'
import ReactPlayer from 'react-player';

const YouTubeLink = ({location}) => {
  return (
    <>
    <div className='video flex items-center justify-center m-2  mt-20'>
      <ReactPlayer controls url={location.url} />
      </div>
    </>
  )
}

export default YouTubeLink