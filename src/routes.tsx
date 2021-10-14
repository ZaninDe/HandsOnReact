import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import User from "./Components/User";
import Tools from "./Components/Tools";
import Count from "./Components/Count";

function Routes () {
  return (
    <BrowserRouter>
      <Route component = {Home} path="/" exact />
      <Route component = {About} path="/About" />
      <Route component = {User} path="/User" />

      <Route component = {Tools} path="/Tools" />
      <Route component = {Count} path="/Count" />
    </BrowserRouter>
  )
}

export default Routes;