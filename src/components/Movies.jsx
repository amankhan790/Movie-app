import React, { useEffect, useState } from "react";
import MovieCart from "./MovieCart";
import axios from "axios";

const Movies = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=318e9d69f5224b7d751a62d60d30a031&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovie(res.data.results);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="text-center font-bold m-5 text-2xl">Trending Movies</div>
      <div className="flex flex-wrap flex-row justify-around gap-5 p-5">
        {movie.map((movieItem, id) => {
          return (
            <MovieCart key={movieItem.id} 
            poster_path={movieItem.poster_path}
            name={movieItem.original_title} />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=318e9d69f5224b7d751a62d60d30a031&language=en-US&page=1
