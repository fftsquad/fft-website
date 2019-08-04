import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{ background: "#fff" }}>
      <div
        className="navbar navbar-dark bg-dark"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: " flex-end"
        }}
      >
        <nav>
          <Link style={{ fontSize: ".1.2rem" }} className="navbar-brand" to="/">
            Home
          </Link>
          <Link
            style={{ fontSize: ".1.2rem" }}
            className="navbar-brand"
            to="/about"
          >
            About Us
          </Link>
          <Link
            style={{ fontSize: ".1.2rem" }}
            className="navbar-brand"
            to="/mission"
          >
            Mission Statement
          </Link>
          <Link
            style={{ fontSize: "1.2rem" }}
            className="navbar-brand"
            to="/blog"
          >
            FFT Blog
          </Link>
        </nav>
      </div>
    </div>
  );
};
export default Nav;
