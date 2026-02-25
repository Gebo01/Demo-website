import { useState } from "react";
import ServiceBox from "./ServiceBox";

import tiles from "./img/tiles.png";
import lightning from "./img/lightning.png";
import underfloor from "./img/underfloor-heating.png";
import waste from "./img/waste.png";
import roof from "./img/roofing.png";
import plumbing from "./img/repairing.png";

function ServiceSlider() {
  const [slide, setSlide] = useState(0);

  const services = [
    {
      Title: "Plumbing",
      Text: "Sanitary fitments are connected to the sewer network through siphons. Whenever you need to replace or fix any of these utilities, call the men that have experience with such tasks.",
      bg: "bg-red-500",
      img: plumbing,
    },

    {
      Title: "Painting",
      Text: "Our licensed contractors will quickly and efficiently paint the walls, put up wallpaper, and perform more complex work.",
      bg: "bg-amber-400",
      img: tiles,
    },

    {
      Title: "Carpentry",
      Text: "Door and window repairs, installing shelves, fitting ladders, skirting boards and more.",
      bg: "bg-cyan-400",
      img: waste,
    },

    {
      Title: "Roof Cleaning",
      Text: "We provide professional roof cleaning services to maintain your property's appearance.",
      bg: "bg-green-400",
      img: roof,
    },

    {
      Title: "Electrical",
      Text: "We offer comprehensive electrical services including installations and repairs.",
      bg: "bg-orange-400",
      img: lightning,
    },

    {
      Title: "Underfloor Heating",
      Text: "Professional installation and repair of underfloor heating systems.",
      bg: "bg-yellow-400",
      img: underfloor,
    },
  ];

  const next = () => {
    if (slide < services.length - 4) setSlide(slide + 1);
  };

  const prev = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* ✅ DESKTOP SLIDER */}
      <div className="hidden md:block relative">
        <button
          onClick={prev}
          className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-3xl"
        >
          ‹
        </button>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-300"
            style={{ transform: `translateX(-${slide * 25}%)` }}
          >
            {services.map((item, index) => (
              <ServiceBox
                key={index}
                Title={item.Title}
                Text={item.Text}
                Icon={item.img}
                bg={item.bg}
              />
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-3xl"
        >
          ›
        </button>
      </div>

      {/* ✅ MOBILE STACKED LAYOUT */}
      <div className="md:hidden flex flex-col gap-6">
        {services.map((item, index) => (
          <ServiceBox
            key={index}
            Title={item.Title}
            Text={item.Text}
            Icon={item.img}
            bg={item.bg}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceSlider;
