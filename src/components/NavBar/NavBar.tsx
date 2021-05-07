
import { menuList } from "../../Global/Constant";
import { Route, BrowserRouter as Router } from "react-router-dom";
import {Styledli,StyledLink,StyledUl} from '../../Global/Styles'
import React from "react";
import reactLogo from '../../Global/reactLogo.png'

function NavBar() {
  return (
    <React.Fragment>
      <a href="/">
      <img src={reactLogo} alt="Logo"  style={{width:"100px",height:"50px"}} />
      </a>
    <Router>
     
       
          <StyledUl>
            {menuList.map((item) => (
              <Styledli 
                key={item.key} 
              >
                <StyledLink exact to={item.path}>
                  {item.name}
                </StyledLink>
                
              </Styledli>
            ))}
          </StyledUl>
         
             
 

      {menuList.map((li) => (
            <Route
              path={li.path}
              exact
              key={li.key}
              component={li.component}
            ></Route>
          ))}
    </Router>
    </React.Fragment>
  );
}

export default NavBar;
