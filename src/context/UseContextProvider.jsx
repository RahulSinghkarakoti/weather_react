import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

const UseContextProvider = ({ children }) => {
  const [Data, setData] = useState(null);
  const [Place, setPlace] = useState(null);
//   console.log(Place);
  useEffect(() => {
    if (Place) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${Place}&appid=4bf56cb5c82e851b1d09f60bea1f3865`
          );
          setData(response.data);

        } catch (error) {
          console.error("Error fetching the weather data", error);
        }
      };
      fetchData();
    }

  }, [Place]); 

  return (
    <DataContext.Provider value={{Data,setPlace,Place}}>
      {children}
    </DataContext.Provider>
  )
  
};

export {UseContextProvider,DataContext};
