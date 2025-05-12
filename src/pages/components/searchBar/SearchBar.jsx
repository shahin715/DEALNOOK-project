import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
