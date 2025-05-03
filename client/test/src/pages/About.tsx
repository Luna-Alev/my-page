import React, { useState } from "react";
import classNames from "classnames";

const images = [
  "https://via.placeholder.com/600x400?text=1",
  "https://via.placeholder.com/600x400?text=2",
  "https://via.placeholder.com/600x400?text=3",
  "https://via.placeholder.com/600x400?text=4",
  "https://via.placeholder.com/600x400?text=5",
];

export default function About() {
  const [current, setCurrent] = useState(2);

  const renderCarousel = () => {
    return (
      <div className="relative flex justify-center mt-10 space-x-[-100px] overflow-visible">
        {images.map((img, index) => {
          const position = index - current;
          const scale = index === current ? "scale-100 z-30" : "scale-75 z-20 opacity-60";

          return (
            <div
              key={index}
              className={classNames(
                "transform transition-all duration-300 relative cursor-pointer",
                scale
              )}
              onClick={() => setCurrent(index)}
            >
              <div className="relative w-[300px] h-[200px] overflow-hidden rounded shadow-lg">
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
                {index === current && (
                  <div className="absolute bottom-0 w-full h-1/3 bg-gray-800 bg-opacity-70 text-white p-2 transform translate-y-full hover:translate-y-0 transition-transform duration-300">
                    <p>Image {index + 1} description here.</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-gray-900 min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <img
          src="https://via.placeholder.com/200"
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover shadow-md"
        />
        <div className="text-gray-300">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
            Cras venenatis euismod malesuada. Sed nec tincidunt justo. Curabitur sit amet elit quis lorem tincidunt pretium.
          </p>
        </div>
      </div>

      {renderCarousel()}
    </div>
  );
}