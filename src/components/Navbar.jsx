import React from 'react'
import Logo from "../assets/Logo.jpg"

const Navbar = () => {
  return (
    <div className='flex border space-x-8 pl-3 items-center py-4'>
      <img className='w-[50px] rounded-4xl' src={Logo} alt="" />
      <a href="/" className='text-blue-400 text-3xl font-bold'>Home</a>
      <a href="/watchlist" className="text-blue-400 text-3xl font-bold">Watchlist</a>
    </div>
  )
}

export default Navbar
