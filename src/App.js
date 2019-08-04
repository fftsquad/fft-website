import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import Toggle from "./components/Toggle";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";



function App(props) {
  return (
    <div>
      <NavBar />
       <Toggle /> 
       {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} /> 
        <Route path="/blog" component={Blog} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch>  */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
