import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
// import About from "./components/About";
// import ContactUs from "./components/ContactUs";
// import Blog from "./components/Blog";
import Toggle from "./components/Toggle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";



function App(props) {
  return (
    <div className="container">
      <NavBar />
      <Toggle />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
