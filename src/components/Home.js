import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Home = props => {
  console.log('My props', props)
  return (
    <div>
      <Nav />
      <div className="home">Home</div>
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
