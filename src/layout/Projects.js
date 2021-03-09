import "../styles.css";
import React, { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard.js";
import { projectsByIlemar } from "../constant/constant";

const Projects = () => {
  const projectOffsetTop = useRef(null);

  useEffect(() => {
    //props.getOffsetTop(projectOffsetTop.current.offsetTop);
  }, [projectOffsetTop]);

  return (
    <div
      ref={projectOffsetTop}
      id="projects"
      className="perfectCentered column"
    >
      <div className="perfectCentered mb-4">
        <h1 className="textLetter2">Projects</h1>
      </div>
      <div id="containerProjects" className="perfectCentered">
        <ProjectCard {...{ projects: projectsByIlemar }} />
      </div>
    </div>
  );
};

export default Projects;
