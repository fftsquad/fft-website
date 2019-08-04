import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Mission from "./components/Mission";
import Blog from "./components/Blog";
import Toggle from "./components/Toggle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";



function App(props) {
  return (
    <div>
      <Nav />
      <Toggle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mission" component={Mission} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
