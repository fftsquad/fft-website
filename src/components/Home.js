import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Home = props => {
  console.log('My props', props)
  return (
    <div>
   
      <div className="home">Home</div>
      {/* <button
        onClick={() => props.setIsToggleOn(!props.isToggleOn)}
        style={props.isToggleOn ? props.style.on : props.style.off}
      >
        {props.isToggleOn ? "ON" : "OFF"}
      </button> */}
     
    </div>
  );
};
export default Home;
