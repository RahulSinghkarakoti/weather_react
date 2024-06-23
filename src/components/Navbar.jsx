import React, { useContext, useState } from "react";
import { location } from "../assets";
import { DataContext } from "../context/UseContextProvider";

const Navbar = () => {
  const [city, setCity] = useState("");

  const {  setPlace } = useContext(DataContext);
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(city);
  };

  const titleCase = (str) => {
    return str.toLowerCase().replace(/\b(\w)/g, (char) => char.toUpperCase());
  };


  return (
    <div className="h-[50px] w-full py-2 flex justify-between items-center ">
      <h1 className="text-[40px] text-white font-bold">Weather</h1>
      <div className="sm:flex hidden items-center space-x-2"
      >
        <img src={location} className="w-[20px] h-[20px]  " alt="" />
        <h1 className={`font-semibold text-white text-[20px]  ${
        city ? "" : "hidden"
      }`}>{titleCase(city)}</h1>
      </div>
      <div>
        <div className="search relative inline-block ">
          <form action="" onSubmit={handleSubmit}>
            <input
              className="md:w-72 w-32 px-4 py-2 rounded-full shadow-md focus:outline-none "
              placeholder="Search..."
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></input>
            <button type="submit" 
            className="absolute top-0 right-0 bg-gray-900 border-4 border-white text-white cursor-pointer px-4 sm:py- py-1 rounded-full shadow-md transition-transform duration-500 hover:scale-110 hover:bg-pink-600">Go</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
