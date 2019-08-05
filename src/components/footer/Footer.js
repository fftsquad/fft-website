import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ background: "#000000" }}>
      <div
        className="navbar navbar-light bg-light"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: " flex-start"
        }}
      >
        <nav>
          <Link style={{ fontSize: "1rem" }} className="navbar-brand" to="/">
            Home
          </Link>
          <Link
            style={{ fontSize: "1rem" }}
            className="navbar-brand"
            to="/about"
          >
            About Us
          </Link>
          <Link
            style={{ fontSize: "1rem" }}
            className="navbar-brand"
            to="/about"
          >
            The FFT Story
          </Link>
          <Link
            style={{ fontSize: "1rem" }}
            className="navbar-brand"
            to="/blog"
          >
            Blog
          </Link>
        </nav>
        <nav>
          <Link className="navbar-brand" to="/">
            <i class="fab fa-facebook" />
          </Link>
          <Link className="navbar-brand" to="/about">
            <i class="fab fa-twitter" />
          </Link>
          <Link className="navbar-brand" to="/about">
            <i class="fab fa-youtube" />
          </Link>
          <Link className="navbar-brand" to="https://github.com/fftsquad">
            <i class="fab fa-github" />
          </Link>
          <Link className="navbar-brand" to="/blog">
            <i class="fab fa-linkedin-in" />
          </Link>
        </nav>
      </div>
    </div>
  );
};
export default Footer;
