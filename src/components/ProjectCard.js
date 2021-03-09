import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ projects = [] }) => {
  const cards = projects.map((ele, i) => {
    return (
      <Link key={ele.nameProject + i} to={ele.link + ele.nameProject}>
        <div className="divProject">
          <div
            className="imgProject"
            style={{
              background: `url(${ele.imgProject})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="footerProject perfectCentered textLetter2">
            {ele.nameProject}
          </div>
        </div>
      </Link>
    );
  });

  return <>{cards}</>;
};

export default ProjectCard;
