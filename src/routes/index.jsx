import React, { useState } from "react";
import Officer from "./Officer";
import Staff from "./Staff";
import Student from "./Student";
import Admin from "./Admin";
import Layout from "../components/Layout/index";
import { useAuth } from "../contexts/AuthContext";
import Login from "./Login";
import Signup from "../pages/Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const IndexRoute = () => {
  const { userData } = useAuth();
  console.log(userData);
  const renderAppBasedOnRole = () => {
    switch (userData.role) {
      case "staff":
        return (
          <div>
            <Staff />
          </div>
        );
      case "student": {
        return (
          <div>
            <Student />
          </div>
        );
      }
      case "officer":
        return (
          <div>
            <Officer />
          </div>
        );
      case "admin":
        return (
          <div>
            <Admin />
          </div>
        );
      default:
        return (
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </Router>
        );
    }
  };

  return renderAppBasedOnRole();
};

export default IndexRoute;
