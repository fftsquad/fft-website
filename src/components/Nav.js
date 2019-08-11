import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className="nav justify-content-center">
        <nav className="nav-item" style={{display:'flex' , color:'black'}} >
          <Link style={{ color:'black'}} className="nav-link active" to="/">Home</Link>
          <Link style={{ color:'black'}}  className="nav-link" to="/about">About Us</Link>
          <Link style={{ color:'black'}} className="nav-link" to="/mission">Our Mission Statement</Link>
          <Link style={{ color:'black'}} className="nav-link" to="/store">Store</Link>
          <Link style={{ color:'black'}}  className="nav-link" to="/blog">FFT Blog</Link>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
