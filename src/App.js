import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Toggle from "./components/Toggle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";



function App(props) {
  return (
    <div>
      <NavBar />
       <Toggle /> 
      <Home />
      <Footer />
    </div>
  );
}

export default App;
