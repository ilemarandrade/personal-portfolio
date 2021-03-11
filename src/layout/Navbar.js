import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = ({ toRoute = ["Home", "Projects", "Contacts"] }) => {
  let everyLink = toRoute.map((e, i) => {
    return (
      <Link
        key={e + i}
        to="/Home"
        className="textLetter2"
        onClick={(e) => console.log()}
      >
        <div className="textLetter2 nav-link cp">{e}</div>
      </Link>
    );
  });
  return <div id="navbar">{everyLink}</div>;
};

export default Navbar;
