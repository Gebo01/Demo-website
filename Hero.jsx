import React from "react";
import heroImage from "./img/house.avif";
import HandyImg from "./img/HandyGio.png";

function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-amber-400/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center min-h-screen">
          {/* TEXT */}
          <div className="text-center md:text-left pt-24 md:pt-0">
            <h1
              className="
              text-white font-extrabold leading-tight mb-6
              text-4xl sm:text-5xl md:text-[64px]
            "
            >
              Trusted Local
              <br />
              Handyman
              <br />
              Services
            </h1>

            <div className="w-20 h-1 bg-white mb-6 mx-auto md:mx-0"></div>

            <p className="text-white/90 max-w-md mb-10 mx-auto md:mx-0">
              We help you with any jobs around the house. Order our services and
              get the task done on the same day.
            </p>

            {/* Buttons */}
            <div
              className="
              flex flex-col sm:flex-row gap-4
              justify-center md:justify-start
            "
            >
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold transition">
                REQUEST A QUOTE
              </button>

              <button className="bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
            flex justify-center md:justify-end
            mt-10 md:mt-0
          "
          >
            <img
              src={HandyImg}
              alt="Handyman"
              className="
                w-[280px] sm:w-[460px] md:h-[75vh]
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
