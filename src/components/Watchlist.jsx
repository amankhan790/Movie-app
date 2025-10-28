import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

const Watchlist = ({ watchlist, setWatchList, handleRemoveWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [currGenre, setCurrGenre] = useState("All Genre");

  const handleSaerch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const sortIncreasing = () => {
    const sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  const sortDecreasing = () => {
    const sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieItem) => {
      return genreids[movieItem.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genre", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre === genre
                  ? "flex justify-center items-center bg-blue-400 w-[9rem] h-[3rem] rounded text-white font-bold m-4"
                  : "flex justify-center items-center bg-gray-900/60 w-[9rem] h-[3rem] rounded text-white font-bold m-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSaerch}
          value={search}
          type="text"
          placeholder="Search for movies"
          className="h-[3rem] w-[18rem] border-black bg-gray-200 outline-none p-2"
        />
      </div>

      <div className="overfolw-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex gap-2 items-center justify-center">
                <div>
                  <i onClick={sortIncreasing} class="ri-arrow-up-line"></i>
                </div>
                <div>Ratings</div>
                <div>
                  <i onClick={sortDecreasing} class="ri-arrow-down-line"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieItem) => {
                if (currGenre === "All Genre") {
                  return true;
                } else {
                  return genreids[movieItem.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieItem) => {
                return movieItem.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieItem) => {
                return (
                  <tr key={movieItem.id} className="border-b-2">
                    <td className="flex items-center px-6 py-5">
                      <img
                        className="w-[10rem] h-[6rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieItem.backdrop_path}`}
                        alt=""
                      />
                      <div className="mx-10">{movieItem.title}</div>
                    </td>
                    <td>{movieItem.vote_average}</td>
                    <td>{movieItem.popularity}</td>
                    <td>{genreids[movieItem.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveWatchlist(movieItem)}
                      className="text-red-800"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
