import React from "react";
import Man from "./img/man.png";

function SecondHero() {
  return (
    <div className="bg-gray-100 mt-20">
      <div
        className="
        max-w-7xl mx-auto px-6
        flex flex-col md:flex-row
        items-center
        gap-10 md:gap-0
      "
      >
        {/* LEFT */}
        <div
          className="
          max-w-xl
          text-center md:text-left
        "
        >
          <span className="text-red-600 text-xl sm:text-2xl font-bold">
            Let's
          </span>

          <h2
            className="
            text-gray-800 font-bold mt-2
            text-3xl sm:text-4xl md:text-5xl
          "
          >
            Get It Handled!
          </h2>

          <div className="w-20 sm:w-24 h-1 rounded-full bg-red-600 mt-3 mx-auto md:mx-0"></div>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-6">
            If you're looking for some home repairs or simply have a list of
            housework things, and you are having trouble finding a licensed and
            professional handyman then contact Handyman Colorado; your local
            trusted handyman service.
          </p>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4">
            Our trained staff can help you with any jobs around the house. We
            can take care of tasks of any complexity, such as plumbing,
            electrical, painting and so much more. Just get in touch, and our
            specialists will visit you the same day.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
          flex justify-center md:justify-end
          w-full
        "
        >
          <img
            src={Man}
            alt="Handyman"
            className="
              w-[260px] sm:w-[340px] md:w-[500px]
              object-contain
            "
          />
        </div>
      </div>
    </div>
  );
}

export default SecondHero;
