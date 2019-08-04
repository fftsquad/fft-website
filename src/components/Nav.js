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

       {/* <p className="text-center mt-4 mb-4">Or right-aligned</p>
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav> */}

    </div>
  );
};
export default Nav;
