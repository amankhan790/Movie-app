import React from "react";
import avenger from "../assets/1899977.jpg"

const Banner = () => {
  return (
    <>
    <div
      className="h-[50vh] md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${avenger})`,
      }}
    >
    </div>
      <div className="text-center w-full text-white text-xl p-3">
        Avenger Endgame
      </div>
    </>
  );
};

export default Banner;
