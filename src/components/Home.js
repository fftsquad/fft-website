import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import HPCarousel from './homePage Components/HPCarousel';
import HPCards from './homePage Components/HPCards';
import HPProfiles from './homePage Components/HPProfiles';



const Home = props => {
  console.log('My props', props)
  return (
    <div>
      <Nav />
      <div className="home">HOME</div>
      
      <HPCarousel />
      <HPCards/>
      <HPProfiles/>
      
      {/* <button
        onClick={() => props.setIsToggleOn(!props.isToggleOn)}
        style={props.isToggleOn ? props.style.on : props.style.off}
      >
        {props.isToggleOn ? "ON" : "OFF"}
      </button> */}
      <Footer />
    </div>
  );
};
export default Home;
