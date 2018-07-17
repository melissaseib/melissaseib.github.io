import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import "./App.css";
import Login from "containers/Login";
const App = props => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
  </Switch>
);
export default App;
