import React from "react";
import "./Home.css";


import HPCarousel from "./HPCarousel";
import HPCards from "./HPCards";
import HPProfiles from "./HPProfiles";

const Home = props => {
  console.log("My props", props);
  return (
    <div className="container">
      <div className="hp-Carousel">
        <HPCarousel />
      </div>
      <div className="hp-Cards">
        <HPCards />
      </div>
      <div className="hp-Profiles">
        <HPProfiles />
      </div>
    </div>
  );
};
export default Home;

