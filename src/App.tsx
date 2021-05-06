import React from "react";
import styled from "styled-components";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { menuList } from "./constants/Constant";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            {menuList.map((item) => (
              <li
                key={item.key}
                style={{ display: "inline", paddingRight: "10%" }}
              >
                <Link style={{ textDecoration: "none" }} to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {menuList.map((li) => (
          <Route
            path={li.path}
            exact
            key={li.key}
            component={li.component}
          ></Route>
        ))}
      </Router>
    </div>
  );
}

export default App;