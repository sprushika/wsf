import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: grey;
`;

export const StyledUl=styled.ul`
  list-style-type: none;
  display: flex;
`

export const Styledli= styled.li`
  padding: 8px;
  margin-right: 10px;
  border-radius: 4px;
`

export const StyledLink= styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #8bdce7;
  }
  &.active {
    font-weight: bold;
    color: #8bdce7;
  };
`

export const BodyComponent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  > div { //All page components
    width: 100%;
    height: 100%;
  }
`;


