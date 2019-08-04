import React from "react";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/About" eventKey="link-1">
            The FFT Story
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/About" eventKey="link-1">
            The FFT Program
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/Sponsorships" eventKey="link-1">
            Sponsorships
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/Products" eventKey="link-2">
            Products
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/Blog" eventKey="link-2">
            Blog
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/ContactUs" eventKey="link-1">
            Contact Us
          </Nav.Link>
        </Nav.Item>

      </Nav>
    </div>
  );
};
export default NavBar;
