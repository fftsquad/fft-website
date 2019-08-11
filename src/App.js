import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/hpcomponents/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Sponsorships from "./components/Sponsorships";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Toggle from "./components/Toggle";
import Store from "./components/Store"
import "./App.css";
import Nav from './components/Nav'
import Footer from './components/Footer'
function App(props) {
  return (
    <div className="container">
    <Nav/>
      <Toggle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route exact path="/sponsor" component={Sponsorships} />
        <Route path="/merch" component={Products} />
        <Route path="/blog" component={Blog} />
        <Route path="/store" component={Store} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
