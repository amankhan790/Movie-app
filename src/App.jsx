import React from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner /> <Movies />
            </>
          }
        />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
};
export default App;
