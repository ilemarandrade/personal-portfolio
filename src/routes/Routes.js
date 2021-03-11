import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectsByIlemar } from "../constant/constant";
import ScreenLoader from "../layout/ScreenLoader";

const Routes = () => {
  let { project } = useParams();
  let [showIframe, setShowIframe] = useState(false);
  let linkProjectSandbox = projectsByIlemar.filter(
    (e) => e.nameProject == project
  );
  const alReadyLoadIframe = () => {
    console.log("ya cargo el iframe");
    setShowIframe(true);
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <iframe
        src={linkProjectSandbox[0].codesandboxLink}
        style={{
          display: showIframe ? "block" : "none",
          width: "100vw",
          height: "90vh",
          border: "0",
          borderRadius: "0px",
          marginTop: "10vh",
          overflow: "hidden",
        }}
        onLoad={alReadyLoadIframe}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      {showIframe ? <></> : <ScreenLoader />}
    </>
  );
};

export default Routes;
