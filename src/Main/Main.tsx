
import { menuList } from "../Global/Constant";
import { Route, BrowserRouter as Router } from "react-router-dom";
import {BodyComponent, BodyContainer, NavBar, Styledli,StyledLink,StyledUl} from '../Global/Styles'
import reactLogo from '../Global/reactLogo.png'

function Main() {
  return (
    <BodyContainer>
      <Router>
        <NavBar>
          <a href="/">
            <img src={reactLogo} alt="Logo"  style={{width:"100px",height:"50px"}} />
          </a>
          <StyledUl>
            {menuList.map((item:any) => (
              <Styledli key={item.key}>
                <StyledLink exact to={item.path}>
                  {item.name}
                </StyledLink>
              </Styledli>
            ))}
          </StyledUl>
        </NavBar>
        <BodyComponent>
          {menuList.map((li) => (
            <Route
              path={li.path}
              exact
              key={li.key}
              component={li.component}
            ></Route>
          ))}
        </BodyComponent>
      </Router>
    </BodyContainer>
  );
}

export default Main;
