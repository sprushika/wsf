import styled from 'styled-components';
import { NavLink } from "react-router-dom";
export const Styledli= styled.li`
background:grey;
width:10%;
height:10%;
padding-right:50px;


`
const activeClassName = 'nav-item-active'

export const StyledLink= styled(NavLink).attrs({ activeClassName })`
&.${activeClassName} {
  font-weight:bold;
};
text-decoration:none;
color:white;
&:hover {
    color: black;
  }
  
  
`

 export const StyledUl=styled.ul`
float:right;
list-style-type:none;
display:flex;




 `
