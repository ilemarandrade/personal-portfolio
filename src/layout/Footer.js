import React from "react";
import { github, linkedin } from "../assets/svg/svg";
import "../styles.css";

const Footer = () => {
  return (
    <div
      id="footer"
      className="perfectCentered wrap"
      /*    ref={div => (this.footer = div)} */
    >
      <div id="footerSon" className="perfectCentered column">
        <div id="textpie" className="perfectCentered column">
          <h1 className="textcentrado textLetter2">Let's work together</h1>
          <p className="textcentrado textLetter">What is your project?</p>
        </div>
        <div className="perfectCentered wrap">
          <div id="github" className="heightIconos">
            <a
              href="https://github.com/ilemarandrade?tab=repositories"
              rel="noopener noreferrer"
              target="_blank"
            >
              {github}
            </a>
          </div>
          <div id="linkedin" className="heightIconos">
            <a
              href="https://www.linkedin.com/in/ilemar-andrade-0b261818b/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {linkedin}
            </a>
          </div>
        </div>
      </div>
      <div id="footerSon2" className="textLetter perfectCentered wrap">
        <p className="textcentrado">
          *This is a real portfolio. All projects and contact details given are
          real.
        </p>
        <p>© Created by web designer Ilemar Andrade </p>
      </div>
    </div>
  );
};

export default Footer;
