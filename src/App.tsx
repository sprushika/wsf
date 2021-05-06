import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import Home from "./components/home/home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Plans from "./components/Plans/Plans";
import Transformations from "./components/Transformations/Transformations";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Plans">Plans</Link>
            </li>
            <li>
              <Link to="/ContactUs">ContactUs</Link>
            </li>
            <li>
              <Link to="/Transformations">Transformations</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home}></Route>
        <Route path="/About" exact component={About}></Route>
        <Route path="/Plans" exact component={Plans}></Route>
        <Route path="/ContactUs" exact component={ContactUs}></Route>
        <Route
          path="/Transformations"
          exact
          component={Transformations}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
