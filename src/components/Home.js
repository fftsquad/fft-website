import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import HP_Carousel from './homePage Components/HP_Carousel';
import HP_Cards from './homePage Components/HP_Cards';
import HP_Profiles from './homePage Components/HP_Profiles';



const Home = props => {
  console.log('My props', props)
  return (
    <div>
      <Nav />
      <div className="home">HOME</div>
      
      <HP_Carousel />
      <HP_Cards/>
      <HP_Profiles/>
      
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
