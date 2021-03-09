import React from "react";
import { useParams } from "react-router-dom";
import { projectsByIlemar } from "../constant/constant";

const Routes = () => {
  let { project } = useParams();
  let linkProjectSandbox = projectsByIlemar.filter(
    (e) => e.nameProject == project
  );
  return (
    <>
      <iframe
        src={linkProjectSandbox[0].codesandboxLink}
        style={{
          width: "100vw",
          height: "90vh",
          border: "0",
          borderRadius: "0px",
          marginTop: "10vh",
          overflow: "hidden",
        }}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </>
  );
};

export default Routes;
