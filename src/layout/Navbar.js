import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = ({ toRoute = ["Home", "Projects", "Contacts"] }) => {
  let everyLink = toRoute.map((e, i) => {
    return (
      <Link key={e + i} to="/Home" className="textLetter2">
        <div className="textLetter2 nav-link cp" onClick={() => ""}>
          {e}
        </div>
      </Link>
    );
  });
  return <div id="navbar">{everyLink}</div>;
};

export default Navbar;
