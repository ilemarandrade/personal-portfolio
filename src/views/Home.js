import React from "react";
import Carousel from "../layout/Carousel.js";
import About from "../layout/About.js";
import Projects from "../layout/Projects";

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Projects
      /*  getOffsetTop={this.getOffsetTop}
            
            topProjects={this.topProjects} */
      />
    </>
  );
};

export default Home;
