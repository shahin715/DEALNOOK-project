import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaUserAlt, FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  // State to manage mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Upper Section (White Background) */}
      <div style={{ backgroundColor: '#353839' }} className="text-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="font-bold text-3xl ">
              DEALNOOK
            </Link>
          </div>

          {/* Menu Links (Desktop) */}
          <div className="hidden sm:flex items-center gap-6">
            <Link to="/women" className="text-white text-2xl hover:text-gray-600 font-semibold py-2 px-4 rounded-md border border-transparent transition duration-200">
              Women
            </Link>
            <Link to="/men" className="text-white text-2xl hover:text-gray-600 font-semibold py-2 px-4 rounded-md border border-transparent  transition duration-200">
              Men
            </Link>
          </div>

          {/* Search Bar (Hidden on Mobile) */}
          <div className="relative items-center w-full sm:w-1/3 hidden sm:flex">
            <input
              type="text"
              placeholder="Search for items and brands"
              className="w-full py-3 px-6 rounded-full border-2 border-gray-300 focus:outline-none text-black bg-white focus:border-black"
            />
            <button className="absolute right-2 text-gray-400">
              <IoMdSearch size={20} />
            </button>
          </div>

          {/* Icons (Visible on larger screens) */}
          <div className="items-center gap-6 hidden sm:flex">
            <Link to="/log" className="hover:text-gray-600">
              <FaUserAlt size={20} />
            </Link>
            <Link to="/cart" className="hover:text-gray-600">
              <FaShoppingCart size={20} />
            </Link>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="flex items-center gap-6">
            <Link to="/log" className="hover:text-gray-600 sm:hidden">
              <FaUserAlt size={20} />
            </Link>
            <button onClick={toggleMobileMenu} className="sm:hidden text-white">
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Lower Section (Gray Background) */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col gap-4">
            <Link to="/women" className="text-white text-xl hover:text-gray-400">Women</Link>
            <Link to="/men" className="text-white text-xl hover:text-gray-400">Men</Link>
            <Link to="/newin" className="text-white text-xl hover:text-gray-400">New In</Link>
            <Link to="/clothing" className="text-white text-xl hover:text-gray-400">Clothing</Link>
            <Link to="/trending" className="text-white text-xl hover:text-gray-400">Trending</Link>
            <Link to="/brands" className="text-white text-xl hover:text-gray-400">Brands</Link>
            <Link to="/activewear" className="text-white text-xl hover:text-gray-400">Activewear</Link>
          </div>
        </div>
      </div>

      {/* Lower Navbar (Visible on larger screens) */}
      <div style={{ backgroundColor: '#727472' }} className="text-white sm:block hidden">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between space-x-4">
            <Link to="/newin" className="hover:text-gray-400">New In</Link>
            <Link to="/clothing" className="hover:text-gray-400">Clothing</Link>
            <Link to="/trending" className="hover:text-gray-400">Trending</Link>
            <Link to="/dresses" className="hover:text-gray-400">Dresses</Link>
            <Link to="/shoes" className="hover:text-gray-400">Shoes</Link>
            <Link to="/accessories" className="hover:text-gray-400">Accessories</Link>
            <Link to="/brands" className="hover:text-gray-400">Brands</Link>
            <Link to="/activewear" className="hover:text-gray-400">Activewear</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;






