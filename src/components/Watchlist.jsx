import React, { useState } from "react";

const Watchlist = ({ watchlist, setWatchList }) => {
  const [search, setSearch] = useState("");

  const handleSaerch = (e) => {
    setSearch(e.target.value);
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

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center bg-blue-400 w-[9rem] h-[3rem] rounded text-white font-bold mx-4">
          Action
        </div>
        <div className="flex justify-center items-center bg-gray-400/60 w-[9rem] h-[3rem] rounded text-white font-bold">
          Action
        </div>
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
                    <td>{}</td>
                    <td className="text-red-800">Delete</td>
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
