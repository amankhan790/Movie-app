import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";

const App = () => {
  const [watchlist, setWatchList] = useState([]);

  const handeAddWatchlist = (movieItem) => {
    const newWatchlist = [...watchlist, movieItem];
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    setWatchList(newWatchlist);
    console.log(newWatchlist);
  };

  const handleRemoveWatchlist = (movieItem) => {
    const filterWatchlsit = watchlist.filter((movie) => {
      return movie.id != movieItem.id;
    });

    setWatchList(filterWatchlsit);
    console.log(filterWatchlsit);
  };

  useEffect(() => {
    const movieFromLocalStorage = localStorage.getItem("movieApp");
    if (!movieFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(movieFromLocalStorage));
  },[]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />{" "}
              <Movies
                handeAddWatchlist={handeAddWatchlist}
                handleRemoveWatchlist={handleRemoveWatchlist}
                watchlist={watchlist}
              />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} />}
        />
      </Routes>
    </>
  );
};
export default App;
