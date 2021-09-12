import React, { useState } from "react";
import Officer from "./Officer";
import Staff from "./Staff";
import Student from "./Student";
import Admin from "./Admin";
import Layout from "../components/Layout/index";
import { useAuth } from "../contexts/AuthContext";
import Login from "./Login";
import Signup from "../pages/Signup/Signup";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const IndexRoute = () => {
  const { userData } = useAuth();
  console.log("uer data in indeex route");
  const renderAppBasedOnRole = () => {
    switch (userData.role) {
      // console.log("user data in switch ", userData)
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
      default: {
        console.log("rendering auth routes");
        return (
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Redirect to="/login" />
            </Switch>
          </Router>
        );
      }
    }
  };

  return renderAppBasedOnRole();
};

export default IndexRoute;
