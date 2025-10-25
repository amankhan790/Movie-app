import React, { useEffect, useState } from "react";
import MovieCart from "./MovieCart";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({ handeAddWatchlist }) => {
  const [movie, setMovie] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=318e9d69f5224b7d751a62d60d30a031&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovie(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-4">
      <div className="text-center font-bold m-5 text-2xl">Trending Movies</div>
      <div className="flex flex-wrap flex-row justify-around gap-5 p-5">
        {movie.map((movieItem, id) => {
          return (
            <MovieCart
              movieItem={movieItem}
              key={movieItem.id}
              poster_path={movieItem.poster_path}
              name={movieItem.original_title}
              handeAddWatchlist={handeAddWatchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=318e9d69f5224b7d751a62d60d30a031&language=en-US&page=1
