import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = ({ toRoute = ["Home"] }) => {
  let everyLink = toRoute.map((e, i) => {
    return (
      <Link
        key={e + i}
        to="/Home"
        className="textLetter2"
        onClick={(e) => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <div className="textLetter2 nav-link cp">{e}</div>
      </Link>
    );
  });
  return <div id="navbar">{everyLink}</div>;
};

export default Navbar;
