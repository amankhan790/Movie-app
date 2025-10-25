import React from "react";

const MovieCart = ({ movieItem, poster_path, name, handeAddWatchlist }) => {
  return (
    <div
      className="h-[50vh] w-[200px] relative bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
      >
        <div onClick={()=>handeAddWatchlist(movieItem)} className="absolute flex justify-center rounded items-center text-xl top-2 right-3 w-[2rem] h-[2rem] bg-gray-900/60">
          &#128525;
        </div>

      <div className="text-white text-center absolute bottom-0 text-xl p-[5px] w-full bg-gray-900/60 rounded-xl">{name}</div>
    </div>
  );
};

export default MovieCart;
