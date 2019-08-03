import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className="nav-bar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/mission">Our Mission Statement</Link>
          <Link to="/blog">FFT Blog</Link>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
