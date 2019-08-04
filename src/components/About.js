import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Breadcrumb} from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="about-us">About Us page</div>
      breadcrumb on every page except home
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <Footer />
    </div>
  );
};

export default About;

