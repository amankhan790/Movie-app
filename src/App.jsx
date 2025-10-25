import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";

const App = () => {
  const [watchlist, setWatchList] = useState([]);

  const handeAddWatchlist = (movieItem) => {
    const newWatchlist = [...watchlist, movieItem];
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
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
};
export default App;
