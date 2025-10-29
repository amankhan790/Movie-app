import React from "react";
import spiderImage from "../assets/1899977.jpg"

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${spiderImage})`,
      }}
    >
      <div className="bg-blue-900/40 text-center w-full text-white text-xl p-3">
        Avenger Endgame
      </div>
    </div>
  );
};

export default Banner;
