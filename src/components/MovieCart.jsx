import React from "react";
import Watchlist from "./Watchlist";

const MovieCart = ({
  movieItem,
  poster_path,
  name,
  handeAddWatchlist,
  handleRemoveWatchlist,
  watchlist,
  filterWatchlsit
}) => {
  function doesContain(movieItem) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieItem.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[50vh] lg:w-[200px] w-[250px] relative bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieItem) ? (
        <div
          onClick={() => {
            handleRemoveWatchlist(movieItem)
            
          }}
          
          className="absolute flex justify-center rounded items-center text-xl top-2 right-3 w-[2rem] h-[2rem] bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handeAddWatchlist(movieItem)}
          className="absolute flex justify-center rounded items-center text-xl top-2 right-3 w-[2rem] h-[2rem] bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white movieCart text-center absolute bottom-0 text-[15px] p-[5px] w-full bg-amber-50 rounded-xl font-bold">
        {name}
      </div>
    </div>
  );
};

export default MovieCart;
