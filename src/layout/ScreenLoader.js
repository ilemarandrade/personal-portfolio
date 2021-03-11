import React from "react";
import { loader } from "../assets/svg/svg";

const ScreenLoader = ({ width = "100%", height = "100vh" }) => {
  return (
    <div
      className="perfectCentered column"
      style={{ background: "#0066ff", width: width, height: height }}
    >
      <div
        className="textLetter2 fc-primary txta-center mb-2"
        style={{ maxWidth: "17em" }}
      >
        Wait a moment, shortly I am showing you the project with its code and
        its preview
      </div>
      {loader}
      <div></div>
    </div>
  );
};

export default ScreenLoader;
