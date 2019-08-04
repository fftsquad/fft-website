import React from "react";
import "./Home.css";

import HPCarousel from "./homePage Components/HPCarousel";
import HPCards from "./homePage Components/HPCards";
import HPProfiles from "./homePage Components/HPProfiles";

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

{
  /* <button
        onClick={() => props.setIsToggleOn(!props.isToggleOn)}
        style={props.isToggleOn ? props.style.on : props.style.off}
      >
        {props.isToggleOn ? "ON" : "OFF"}
      </button> */
}
