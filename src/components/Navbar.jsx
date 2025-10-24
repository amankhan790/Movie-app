import React from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 pl-3 items-center py-4">
      <img className="w-[50px] rounded-4xl" src={Logo} alt="" />
      <Link to="/" className="text-blue-400 text-3xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-400 text-3xl font-bold">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
