import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
