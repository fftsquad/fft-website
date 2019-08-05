import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/About">
            <Nav.Link eventKey="link-1">The FFT Story</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/Programs">
            <Nav.Link eventKey="link-1">The FFT Program</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/sponsor">
            <Nav.Link eventKey="link-1">Sponsorships</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/merch">
            <Nav.Link eventKey="link-2">
              Products
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/Blog">
            <Nav.Link eventKey="link-2">
              Blog
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>

        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link eventKey="link-1">
              Contact Us
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default NavBar;
