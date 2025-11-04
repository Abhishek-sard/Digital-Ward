import React, { useRef } from "react";
import ambulance from "../../assets/ambulance.jpg";
import damkal from "../../assets/damkal.jpg";
import football from "../../assets/football.jpg";
import gate from "../../assets/gate.jpg";
import madir from "../../assets/madir.jpg";
import nagarpalika1 from "../../assets/nagarpalika1.jpg";
import tal from "../../assets/tal.jpg";
import team from "../../assets/team.jpg";

const Image = () => {
  const sliderRef = useRef(null);

  const imageslider = [
    { id: 1, src: ambulance, title: "एम्बुलेन्स" },
    { id: 2, src: damkal, title: "दमकल" },
    { id: 3, src: football, title: "फुटबल टोली" },
    { id: 4, src: gate, title: "बैठक" },
    { id: 5, src: madir, title: "रामधुनी मन्दिर" },
    { id: 6, src: nagarpalika1, title: "नगरपालिका भवन" },
    { id: 7, src: tal, title: "ताल" },
    { id: 8, src: team, title: "क्रिकेट टोली" },
  ];

  const scroll = (direction) => {
    const { current } = sliderRef;
    const scrollAmount = 300;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full p-5 bg-gray-100 relative">
      <h2 className="text-center text-4xl text-amber-900 font-bold mb-5">
        फोटो संग्रह
      </h2>

      <div className="relative flex items-center">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          &#10094;
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar px-10"
        >
          {imageslider.map((item) => (
            <div
              key={item.id}
              className="flex-none w-60 bg-white rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="p-3 text-center font-medium">{item.title}</div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-200"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Image;
