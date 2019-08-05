import React from "react";
// import { render } from "react-dom";
// import {Carousel} from "react-bootstrap/Carousel";
import { Carousel } from "react-bootstrap";
import melanin1 from "../images/melanin1.jpeg";
import melanin2 from "../images/melanin2.jpeg";
import melanin3 from "../images/melanin3.jpeg";

export default function HPCarousel() {
  return (
    <div>
      FFT Affairs
      <Carousel>
        <Carousel.Item className="size">
          <img className="d-block w-100" src={melanin1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={melanin3}
            alt="2 slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={melanin2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
