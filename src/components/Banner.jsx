import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://imgs.search.brave.com/WpPfZhWIc37mhwn4iqnGyt7c6FaHHzVNrwxqNwhZWy4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDkwMDIx/NDAuanBn)`,
      }}
    >
      <div className="bg-blue-900/40 text-center w-full text-white text-xl p-3">
        Avenger Endgame
      </div>
    </div>
  );
};

export default Banner;
