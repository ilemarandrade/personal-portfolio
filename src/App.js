import React, { useState, useEffect } from "react";
import "./styles.css";
import Footer from "./layout/Footer.js";
import Navbar from "./layout/Navbar.js";
import assignamentFont from "./helpers/assignmentFont";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./routes/Routes";
import Home from "./views/Home";

const App = () => {
  const [deviceWidth, setdeviceWidth] = useState(window.innerWidth);
  useEffect(() => {
    setdeviceWidth(assignamentFont(deviceWidth));
    window.addEventListener("resize", orientation);

    return () => {
      window.removeEventListener("resize", orientation);
    };
  }, []);

  const orientation = () => {
    setdeviceWidth(assignamentFont(window.innerWidth));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/project/nameOfprojectIs:project">
            <Routes />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
