import React from "react";
import { Nav, NavBarContainer } from "./NavBarElements";
import { menuList } from "../../constants/Constant";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

function NavBar() {
  return (
    <Router>
      <Nav>
        <NavBarContainer>
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
         
        </NavBarContainer>        
      </Nav>

      {menuList.map((li) => (
            <Route
              path={li.path}
              exact
              key={li.key}
              component={li.component}
            ></Route>
          ))}
    </Router>
  );
}

export default NavBar;
