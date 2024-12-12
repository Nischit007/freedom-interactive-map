import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = ({ location }) => {
  // Guard clause to ensure gallery exists in the location data
  if (!location || !location.gallery || location.gallery.length === 0) {
    return null; // Optionally, you can return a placeholder or empty element
  }

  const upperMarquee = [];
  const lowerMarquee = [];

  // Find the midpoint of the gallery array
  const midpoint = Math.floor(location.gallery.length / 2);

  // Split the gallery array into two halves
  const upperHalf = location.gallery.slice(0, midpoint);  // First half
  const lowerHalf = location.gallery.slice(midpoint);     // Second half

  upperMarquee.push(...upperHalf);
  lowerMarquee.push(...lowerHalf);

  return (
    <div className="container mx-auto overflow-hidden">
      {/* Upper Marquee */}
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      
      {/* Lower Marquee */}
      <div className="mt-3">
        <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
      </div>
    </div>
  );
};

export default Marquee;
