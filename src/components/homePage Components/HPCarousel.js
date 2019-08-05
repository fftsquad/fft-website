import React from 'react';
// import { render } from "react-dom";
// import {Carousel} from "react-bootstrap/Carousel";
import { Carousel } from "react-bootstrap";



export default function HPCarousel() {
  return (
    <div>
      
      <Carousel>
        <Carousel.Item className="size">
          <img
            className="d-block w-100"
            src="https://ton.twitter.com/1.1/ton/data/dm/1158085998380666884/1158085995285233664/ApJteDbH.jpg:medium"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ton.twitter.com/1.1/ton/data/dm/1158092725725458436/1158092711129305088/WjiM-eBw.jpg:medium"
            alt="2 slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

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



