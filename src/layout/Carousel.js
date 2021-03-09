import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "../styles.css";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div id="presentation" className="perfectCentered">
      <Carousel
        interval={3000}
        activeIndex={index}
        onSelect={handleSelect}
        prevLabel={""}
        nextLabel={""}
      >
        <Carousel.Item id="item1">
          <Carousel.Caption>
            <h1 className="textLetter2">Software Developer</h1>
            <p className="textLetter">
              Using html, css, js, front end libraries, jquery, bootstrap,
              react, redux.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item id="item2">
          <Carousel.Caption>
            <h1 className="textLetter2">Musician</h1>
            <p className="textLetter">
              I perform with the instument of the voice and guitar, also
              songwriting
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
