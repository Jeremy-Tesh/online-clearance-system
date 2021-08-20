import React from "react";
import Layout from "../components/Layout/index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../pages/Admin-page/Dashboard/Dashboard";
import Login from "./Login";
import Property from "../components/property/property";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";
import IndexRoute from ".";

const AdminPage = () => {
  return (
    <Router>
      <p>haloooo</p>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/IndexRoute" component={IndexRoute} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default AdminPage;
