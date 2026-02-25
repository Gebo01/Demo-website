import React from 'react'
import ServiceBox from './ServiceBox';
import tiles from "./img/tiles.png";
import ServiceSlider from './ServiceSlide';

function Service() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <p className="text-2xl text-red-600 font-bold">We Offer</p>
        <h2 className="text-6xl font-semibold text-neutral-700">
          Improvement Services
        </h2>
        <div className="w-24 bg-red-600 h-0.5 mt-4"></div>
        <p className="max-w-5xl text-center text-gray-600 mt-4 px-4">
          We can easily liberate you from household cares. Our troubleshooters
          have already helped thousands of Colorado citizens improve their homes
          and maintain their properties.<span className='text-orange-300'>What can we do for you?</span>
        </p>
      </div>
 
        <ServiceSlider />
    </div>
  );
}

export default Service
