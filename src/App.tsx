import React from "react";
import styled from "styled-components";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { menuList } from "./constants/Constant";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  return <NavBar />;
}

export default App;
