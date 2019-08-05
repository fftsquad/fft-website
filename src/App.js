import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/hpcomponents/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Sponsorships from "./components/Sponsorships";
import Products from "./components/Products";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="container">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route exact path="/sponsor" component={Sponsorships} />
        <Route path="/merch" component={Products} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={ContactUs} />
        <Footer />
    </div>
  );
}

export default App;
