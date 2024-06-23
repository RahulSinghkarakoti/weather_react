import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UseContextProvider } from "./context/UseContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-black p-2">
    <React.StrictMode>
      <UseContextProvider>
        <App />
      </UseContextProvider>
    </React.StrictMode>
    
  </div>
);
