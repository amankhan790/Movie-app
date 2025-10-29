import React from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex border lg:space-x-8 space-x-3 pl-3 items-center py-4">
      <img className="lg:w-[70px] w-[50px] border-2 border-white rounded-4xl" src={Logo} alt="" />
      <div className="w-[200px space-x-2 uppercase flex gap-1.5">
      <Link to="/" className="text-blue-400 lg:text-3xl text-[18px] font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-400  lg:text-3xl text-[18px]  font-bold">
        Watchlist
      </Link>

      </div>
    </div>
  );
};

export default Navbar;
