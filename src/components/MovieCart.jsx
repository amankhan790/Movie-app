import React from "react";

const MovieCart = ({ poster_path, name }) => {
  return (
    <div
      className="h-[50vh] w-[200px] relative bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
      >
      <div className="text-white text-center absolute bottom-0 text-xl p-[5px] w-full bg-gray-900/60 rounded-xl">{name}</div>
    </div>
  );
};

export default MovieCart;
