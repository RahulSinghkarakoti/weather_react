import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WeatherInfo from "./components/WeatherInfo";
import Forcast from "./components/Forcast";
import { Bg } from "./assets";
import { DataContext } from "./context/UseContextProvider";
import { useContext } from "react";
function App() {
  const {Data} = useContext(DataContext);
  
  return (
    <>
     {Data?(<>
     <Navbar/>
     <WeatherInfo/>
     </>)
     :<Forcast/>}
    </>
  );
}

export default App;
