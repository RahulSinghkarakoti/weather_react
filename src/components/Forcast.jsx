import React, { useContext, useState } from "react";
import { DataContext } from "../context/UseContextProvider";

const Forcast = () => {
  const [city, setCity] = useState("");
  const { Place, setPlace } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(city);
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center  bg-custom-image h-[100vh]">
      <h1 className="text-[100px] text-white font-bold">
        Weather
      </h1>
      <div className="search relative inline-block  ">
        <form action="" onSubmit={handleSubmit}>
          <input
            className="md:w-72 w-52 px-4 py-2 rounded-full shadow-md focus:outline-none "
            placeholder="Search..."
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="absolute top-0 right-0 bg-gray-900 border-4 border-white text-white cursor-pointer px-4 sm:py- py-1 rounded-full shadow-md transition-transform duration-500 hover:scale-110 hover:bg-pink-600"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forcast;
