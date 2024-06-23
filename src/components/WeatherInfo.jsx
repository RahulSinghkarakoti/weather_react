import React, { useContext, useEffect } from "react";
import styles from "../style";
import { sunrain, humidity, atmpressure, wind } from "../assets";
import { DataContext } from "../context/UseContextProvider";

import WeatherIcons from "react-icons-weather";

const WeatherInfo = () => {
  const { Data } = useContext(DataContext);

  const Datecomponent = () => {
    // Fetch the current date
    const currentDate = new Date();

    // Get the date components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
    const day = currentDate.getDate();

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Format the date
    const formattedDate = `${day} ${monthNames[month - 1]}, ${year}`;

    return <div className="text-[20px] md:my-[40px]">{formattedDate}</div>;
  };

  return (
    < >
      <div className="flex items-center justify-center text-white ">
  <div className="  h-full w-full flex flex-col justify-center items-center">
    <div className="  sm:h-[full] w-full sm:w-[50%] p-0  flex justify-center ">
      {/* hero card */}
      <div
            className={`${styles.herocard}  flex flex-row gap-10 justify-end   p-4`}
          >
            <div className="w-[80%]">
              <h1 className="text-[60px] font-bold">
                {Data ? Math.abs(Data.main.temp - 273.15).toFixed(0) : "12"}°C
              </h1>

              <h4 className="text-[16px]  ">
                Feels like:
                {Data
                  ? Math.abs(Data.main.feels_like - 273.15).toFixed(0)
                  : "12"}
                °C
              </h4>
              <h4 className="text-[16px] ">
                {Data ? Data.weather[0].main : "Heavy rainfall"}
              </h4>
              <h4 className="text-[16px]">
                Visibilty:{Data ? Data.visibility / 1000 : "null"}km
              </h4>
              {/* <h4 className="text-[20px] md:my-[40px]">11 June , 2024</h4> */}
              <Datecomponent />
            </div>
            <div className="w-full">
              <WeatherIcons
                name="owm"
                className="w-[100%] h-[100%]  flex justify-end  items-center"
                style={{ fontSize: "100px" }}
                iconId={Data ? Data.weather[0].id : "200"}
              />
            </div>
          </div>
    </div>
    <div className="  w-full flex flex-cols  sm:flex-row sm:justify-between gap-2 flex-wrap justify-center  p-2 sm:px-2">
      {/* info cards */}
      <div className="flex flex-col  items-center md:items-start   ">
        <div className={`${styles.card}`}>
          <img src={wind} alt="" className="sm:w-[55px] w-[30px] h-[55px]" />
          <h1 className="text-[24px] md:text-[30px] font-bold">Wind</h1>
          <h1 className="text-[16px] md:text-[20px]">
            {Data ? Data.wind.speed : ""} mi/hr
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start ">
        <div className={`${styles.card}`}>
          <img src={atmpressure} alt="" className="w-[55px] h-[55px]" />
          <h1 className="text-[24px] md:text-[30px] font-bold">Atm. Pressure</h1>
          <h1 className="text-[16px] md:text-[20px]">
            {Data ? Data.main.pressure : ""} hPa
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start ">
        <div className={`${styles.card}`}>
          <img src={humidity} alt="" className="w-[55px] h-[55px]" />
          <h1 className="text-[24px] md:text-[30px] font-bold">Humidity</h1>
          <h1 className="text-[16px] md:text-[20px]">
            {Data ? Data.main.humidity : ""} %
          </h1>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default WeatherInfo;
